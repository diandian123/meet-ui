/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
/* eslint-disable operator-linebreak */
const wxfs = wx.getFileSystemManager();
Component({
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 类型：normal(可操作) ｜ view(仅预览)
        type: {
            type: String,
            value: 'normal'
        },
        // 数据项
        items: {
            type: Array,
            value: []
        },
        // 每行显示数
        column: {
            type: Number,
            value: 3
        },
        // 最大上传数
        maxCount: {
            type: Number,
            value: 9
        },
        // 选图显示模式
        imageMode: {
            type: String,
            value: 'aspectFill'
        },
        // 所选的图片的质量
        sizeType: {
            type: Array,
            value: ['original']
        },
        // 选择图片的来源
        sourceType: {
            type: Array,
            value: ['album', 'camera']
        },
        // 是否可预览
        preview: {
            type: Boolean,
            value: true
        },
        // 禁用
        disabled: {
            type: Boolean,
            value: false
        },
        // 文件大小限制（kb）
        maxSize: {
            type: Number,
            value: -1
        },
        // 可拖动排序
        sortable: {
            type: Boolean,
            value: false
        }
    },
    /**
     * 数据监听
     */
    observers: {
        items(val) {
            if (val) {
                this.init();
            }
        }
    },
    data: {
        ready: false, // 渲染完成
        itemList: [], // 带位置信息图像容器
        imageList: [], // 原始图像
        draging: false,
        touchMove: '', // 拖动过程禁止页面滚动
        startIndex: null,
        canvasWidth: 0,
        canvasHeight: 0
    },
    methods: {
        init() {
            const { type, maxCount } = this.data;
            const items = this.data.items.slice(0, this.data.maxCount);
            const imageList = [...items];
            const itemList = [...items];
            this.changeFlag = false; // 位置变换标识
            if (type === 'normal' && itemList.length < maxCount) {
                itemList.push({
                    type: 'upload'
                });
            }
            this.setData(
                {
                    ready: false,
                    imageList,
                    itemList
                },
                () => {
                    this.initPosition();
                }
            );
        },
        initPosition() {
            this.queryContainerPosition();
            this.queryNodePosition();
        },
        /**
         * 查询容器位置
         */
        queryContainerPosition() {
            const query = wx.createSelectorQuery().in(this);
            query
                .select('#dragBox')
                .boundingClientRect((res) => {
                    this.container = {
                        top: res.top,
                        left: res.left,
                        height: res.height
                    };
                })
                .exec();
        },
        /**
         * 计算拖拽元素大小与位置信息
         */
        queryNodePosition() {
            const query = wx.createSelectorQuery().in(this);
            query
                .selectAll('.mt-imagepicker__item')
                .boundingClientRect((res) => {
                    this.setData({
                        ready: true,
                        itemList: this.data.itemList.map((item, index) => {
                            // 计算相对容器元素的位置
                            const top = res[index].top - this.container.top;
                            const left = res[index].left - this.container.left;
                            const width = res[index].width;
                            const height = res[index].height;

                            let dragItem = {
                                index,
                                boxWidth: width,
                                boxHeight: height,
                                boxTop: top,
                                boxLeft: left,
                                top,
                                left
                            };
                            if (item.type === 'upload') {
                                // 追加选择
                                dragItem.type = 'upload';
                            } else {
                                dragItem.type = 'image';
                                dragItem = { ...item, ...dragItem };
                            }
                            return dragItem;
                        })
                    });
                })
                .exec();
        },
        /**
         * 长按图片激活拖拽能力
         * @param {object} e
         */
        handleLongPress(e) {
            if (e.touches.length > 1) {
                // 避免多指操作
                this.setData({
                    draging: false,
                    touchMove: '',
                    startIndex: null
                });
                return false;
            }
            this.queryContainerPosition(); // 重新获取容器位置（兼容页面滚动情况）
            const changedTouch = e.changedTouches[0];
            const { index } = e.currentTarget.dataset;
            // 激活拖动能力
            this.setData({
                draging: true,
                touchMove: 'handleTouchMove',
                startIndex: index // 拖动图片索引
            });
            // 记录起始位置
            this.startClient = {
                startX: changedTouch.clientX,
                startY: changedTouch.clientY,
                startTop: this.data.itemList[index].top,
                startLeft: this.data.itemList[index].left
            };
            // 震动一下
            wx.vibrateShort();
        },
        /**
         * 拖动过程
         * 计算拖动距离、拖动方向、落点位置，交换位置信息
         * @param {object} e
         */
        handleTouchMove(e) {
            // 判断是否在拖拽中
            if (!this.data.draging) {
                return;
            }
            // 多指操作提前结束
            if (e.touches.length > 1) {
                this.handleTouchend();
                return false;
            }
            const changedTouch = e.changedTouches[0];
            const itemList = this.data.itemList;
            const startIndex = this.data.startIndex;
            // 计算拖动距离
            const moveX = changedTouch.clientX - this.startClient.startX;
            const moveY = changedTouch.clientY - this.startClient.startY;
            itemList[startIndex].top = this.startClient.startTop + moveY;
            itemList[startIndex].left = this.startClient.startLeft + moveX;
            this.setData({
                itemList
            });

            // 计算拖动方向与落点位置
            let direction = null;
            let position = null;
            const containerLeft = this.container.left;
            const containerTop = this.container.top;
            for (let i = 0; i < itemList.length; i++) {
                if (
                    startIndex !== i &&
                    itemList[i].type !== 'upload' &&
                    changedTouch.clientX > containerLeft + itemList[i].left &&
                    changedTouch.clientY > containerTop + itemList[i].top &&
                    changedTouch.clientX < containerLeft + itemList[i].left + itemList[i].boxWidth &&
                    changedTouch.clientY < containerTop + itemList[i].top + itemList[i].boxHeight
                ) {
                    position = i;
                    if (itemList[startIndex].boxTop > itemList[i].top) {
                        direction = 'up'; // 上移
                    } else if (itemList[startIndex].boxTop < itemList[i].top) {
                        direction = 'down'; // 下移
                    } else {
                        if (itemList[startIndex].boxLeft > itemList[i].left) {
                            direction = 'left'; // 左移
                        } else {
                            direction = 'right'; // 右移
                        }
                    }
                }
            }
            if (direction) {
                this.swapPosition(direction, position);
            }
        },
        // 交换位置信息
        swapPosition(direction, index) {
            this.changeFlag = true; // 记录变更
            const itemList = this.data.itemList;
            if (direction === 'left' || direction === 'up') {
                const startIndex = itemList[index].index;
                const endIndex = itemList[this.data.startIndex].index;
                const itemListCache = [...itemList];
                for (let i = startIndex; i < endIndex; i++) {
                    const nextItem = itemListCache.find((item) => {
                        return item.index === i + 1;
                    });
                    const currentIndex = itemListCache.findIndex((item) => {
                        return item.index === i;
                    });
                    // 向后移动一位
                    itemList[currentIndex] = {
                        ...itemList[currentIndex],
                        index: nextItem.index,
                        top: nextItem.boxTop,
                        left: nextItem.boxLeft,
                        boxTop: nextItem.boxTop,
                        boxLeft: nextItem.boxLeft
                    };
                }

                const startItem = itemListCache[index];
                // 更换当前位置
                itemList[this.data.startIndex] = {
                    ...itemList[this.data.startIndex],
                    index: startItem.index,
                    boxTop: startItem.boxTop,
                    boxLeft: startItem.boxLeft
                };
            } else if (direction === 'right' || direction === 'down') {
                const startIndex = itemList[this.data.startIndex].index;
                const endIndex = itemList[index].index;
                const itemListCache = [...itemList];
                this._swapPrev(endIndex, startIndex); // 向前移动一位

                const endItem = itemListCache[index];
                // 更换当前位置
                itemList[this.data.startIndex] = {
                    ...itemList[this.data.startIndex],
                    index: endItem.index,
                    boxTop: endItem.boxTop,
                    boxLeft: endItem.boxLeft
                };
            }
            this.setData({
                itemList
            });
        },
        // 前移
        _swapPrev(endIndex, startIndex) {
            const itemList = this.data.itemList;
            const itemListCache = [...itemList];
            for (let i = endIndex; i > startIndex; i--) {
                const preItem = itemListCache.find((item) => {
                    return item.index === i - 1;
                });
                const currentIndex = itemListCache.findIndex((item) => {
                    return item.index === i;
                });
                // 向前移动一位
                itemList[currentIndex] = {
                    ...itemList[currentIndex],
                    index: preItem.index,
                    top: preItem.boxTop,
                    left: preItem.boxLeft,
                    boxTop: preItem.boxTop,
                    boxLeft: preItem.boxLeft
                };
            }
        },
        /**
         * 拖动结束
         * 元素落地、输出排序结果
         */
        handleTouchend() {
            if (!this.data.draging) {
                return;
            }
            const itemList = this.data.itemList;
            const activedImage = itemList[this.data.startIndex];
            // 元素落地
            itemList[this.data.startIndex] = {
                ...activedImage,
                top: activedImage.boxTop,
                left: activedImage.boxLeft
            };
            this.setData({
                itemList
            });
            // 位置没有改变
            if (!this.changeFlag) {
                this.setData({
                    draging: false,
                    touchMove: '',
                    startIndex: null
                });
                return;
            }
            // 去除选择图片上传节点
            const validItemList = this.data.itemList.filter((item) => {
                return item.type !== 'upload';
            });
            // 排序结果
            validItemList.sort((pre, next) => {
                return pre.index - next.index;
            });
            const imageList = this.formatImageList(validItemList);
            // 等待移动动画结束，触发更新
            setTimeout(() => {
                this.setData({
                    draging: false,
                    touchMove: '',
                    startIndex: null,
                    items: validItemList
                });
                this.triggerEvent('change', {
                    imageList
                });
            }, 200);
        },
        /**
         * 移除图片
         * @param {object}} e
         */
        handleDelete(e) {
            const itemList = this.data.itemList;
            const startIndex = e.currentTarget.dataset.index;
            const endIndex = itemList.length - 1;
            this._swapPrev(endIndex, startIndex); // 向前移动一位
            this.data.itemList.splice(startIndex, 1); // 移除元素
            this.setData({
                draging: true,
                itemList
            });
            const validItemList = this.data.itemList.filter((item) => {
                return item.type !== 'upload';
            });
            const imageList = this.formatImageList(validItemList);
            // 等待移动动画结束，触发更新
            setTimeout(() => {
                this.setData({
                    draging: false,
                    touchMove: '',
                    startIndex: null,
                    items: validItemList
                });
                this.triggerEvent('change', {
                    imageList
                });
            }, 200);
        },
        /**
         * 格式化imageList数据
         * @param {*} items
         */
        formatImageList(items) {
            return items.map((item) => {
                return {
                    src: item.src,
                    width: item.width,
                    height: item.height,
                    uploaded: item.uploaded ?? true,
                    mimeType: item.mimeType || '',
                    size: item.size || -1 // -1 未知大小
                };
            });
        },
        readFile(path) {
            return new Promise((resolve, reject) => {
                wxfs.readFile({
                    filePath: path,
                    success(res) {
                        resolve(res.data);
                    },
                    fail(err) {
                        reject(err);
                    }
                });
            });
        },
        /**
         * 选择图片
         */
        handleChoose() {
            if (this.data.disabled) {
                return;
            }
            const rest = this.data.maxCount - this.data.items.length;
            const maxSize = this.data.maxSize;
            wx.chooseMedia({
                count: rest,
                sourceType: this.data.sourceType,
                sizeType: this.data.sizeType,
                mediaType: ['image'],
                success: async (res) => {
                    // console.log(res);
                    let files = res.tempFiles;
                    if (maxSize !== -1) {
                        files = files.filter((file) => {
                            const fileSize = parseInt(file.size / 1024);
                            return fileSize <= maxSize;
                        });

                        const diff = res.tempFiles.length - files.length;
                        if (diff > 0) {
                            wx.showToast({
                                icon: 'none',
                                duration: 3000,
                                title: `${diff}张图片超出大小限制`
                            });
                        }
                    }

                    try {
                        const imageListInfo = [];
                        for (const file of files) {
                            const result = await this.getImageInfo(file);
                            imageListInfo.push(result);
                        }

                        // console.log(imageListInfo);
                        const addImageList = imageListInfo.map((item) => {
                            return {
                                src: item.src,
                                width: item.width,
                                height: item.height,
                                mimeType: `image/${item.type}`,
                                uploaded: false
                            };
                        });

                        // 添加时去掉itemList最后一项的upload
                        this.data.itemList.splice(this.data.itemList.length - 1, 1);
                        const imageList = this.formatImageList([...this.data.imageList, ...addImageList]);
                        const items = [...this.data.itemList, ...addImageList];
                        this.setData({
                            items
                        });
                        this.triggerEvent('change', {
                            imageList
                        });
                    } catch (err) {
                        console.error(err);
                    }
                }
            });
        },
        /**
         * 获取图片信息
         * @param {*} img
         */
        getImageInfo(img) {
            return new Promise((resolve, reject) => {
                wx.getImageInfo({
                    src: img.tempFilePath,
                    success: async (res) => {
                        if (res.type === 'gif' || res.orientation === 'up') {
                            resolve({
                                orientation: res.orientation,
                                type: res.type,
                                src: res.path,
                                width: res.width,
                                height: res.height
                            });
                        } else {
                            const result = await this.convertImage({
                                orientation: res.orientation,
                                type: res.type,
                                src: res.path,
                                width: res.width,
                                height: res.height
                            });
                            resolve({
                                orientation: result.orientation,
                                type: result.type,
                                src: result.src,
                                width: result.width,
                                height: result.height
                            });
                        }
                    },
                    fail(err) {
                        reject(err);
                    }
                });
            });
        },
        /**
         * 图片压缩
         * @param {*} img
         */
        convertImage(img) {
            return new Promise((resolve) => {
                const canvasContext = wx.createCanvasContext('compressCanvas', this);
                let width = img.width;
                let height = img.height;
                switch (img.orientation) {
                    case 'up':
                    case 'down': {
                        // 下面按比例压缩图片提升上传速度，可按实际需求更改
                        if (width > 1280) {
                            const rate = height / width;
                            width = 1280;
                            height = Math.floor(1280 * rate);
                        }
                        // 不需要旋转
                        this.setData({
                            canvasWidth: width,
                            canvasHeight: height
                        });
                        canvasContext.drawImage(img.src, 0, 0, width, height);
                        break;
                    }
                    case 'left':
                    case 'right': {
                        // 下面按比例压缩图片提升上传速度，可按实际需求更改
                        if (height > 1280) {
                            const rate = width / height;
                            width = Math.floor(1280 * rate);
                            height = 1280;
                        }

                        // 不需要旋转
                        this.setData({
                            canvasWidth: height,
                            canvasHeight: width
                        });
                        canvasContext.drawImage(img.src, 0, 0, height, width);
                        break;
                    }
                }
                // 优化图像
                canvasContext.draw(false, () => {
                    wx.canvasToTempFilePath(
                        {
                            canvasId: 'compressCanvas',
                            fileType: 'jpg',
                            success: (res) => {
                                const result = {
                                    orientation: 'up',
                                    src: res.tempFilePath,
                                    width,
                                    height,
                                    type: 'jpeg'
                                };
                                if (img.orientation === 'left' || img.orientation === 'right') {
                                    result.width = height;
                                    result.height = width;
                                }
                                resolve(result);
                            },
                            fail() {
                                // 异常直接抛出原始数据
                                resolve(img);
                            }
                        },
                        this
                    );
                });
            });
        },
        /**
         * 预览图片
         * @param e
         */
        previewImage(e) {
            const index = e.currentTarget.dataset.index;
            const items = this.data.items;
            if (this.data.preview) {
                const urls = [];
                items.forEach((item) => {
                    urls.push(item.src || item.path);
                });
                wx.previewImage({
                    current: items[index].src || items[index].path,
                    urls: urls
                });
            }
            this.triggerEvent('preview', {
                index
            });
        }
    }
});
