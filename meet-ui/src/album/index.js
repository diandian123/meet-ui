/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
import Util from '../utils/util';

Component({
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 相册宽度: 单位 rpx
        width: {
            type: Number,
            value: 678
        },
        // 数据项
        items: {
            type: Array,
            value: []
        },
        // 单行显示数量
        column: {
            type: Number,
            value: 3
        },
        // 行间距
        rowGap: {
            type: Number,
            value: 3
        },
        // 列间距
        columnGap: {
            type: Number,
            value: 3
        },
        // 是否可预览
        hasPreview: {
            type: Boolean,
            value: true
        },
        // 图像懒加载
        lazyLoad: {
            type: Boolean,
            value: true
        },
        // 缩略图显示模式
        imageMode: {
            type: String,
            value: 'aspectFill'
        },
        // 图片圆角
        imageRadius: {
            type: Number,
            value: 12
        },
        // 限定最大显示数量，超出会自动 +n 展示，-1不限
        maxCount: {
            type: Number,
            value: -1
        },
        // 图片加载错误
        errorImage: {
            type: String,
            value: './images/default.png'
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        imageWidth: 'auto', // 图片宽度
        imageHeight: 'auto', // 图片高度
        showUrls: [] // 当传入maxCount，处理后数据
    },
    observers: {
        items(val) {
            const maxCount = this.data.maxCount;
            // const { width: albumWidth } = await this.getAlbumWidth();
            const albumWidth = Util.rpx2px(this.data.width);
            if (val) {
                const length = val.length;
                if (length === 1 || maxCount === 1) {
                    this.getSingleImageInfo(albumWidth);
                } else {
                    const rowGap = this.data.rowGap;
                    const size = `${(albumWidth - 2 * rowGap) / 3}px`;
                    this.setData({
                        imageWidth: size,
                        imageHeight: size
                    });
                }
            }
            if (maxCount > 0) {
                this.setData({
                    showUrls: val.slice(0, maxCount)
                });
            }
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        getAlbumWidth() {
            return new Promise((resolve) => {
                const query = this.createSelectorQuery();
                query
                    .select('.mt-album')
                    .boundingClientRect((res) => {
                        resolve(res);
                    })
                    .exec();
            });
        },
        /**
         * 预览图片
         * @param e
         */
        previewImage(e) {
            if (!this.data.hasPreview) {
                return;
            }
            const { index } = e.currentTarget.dataset;
            const items = this.data.items;
            const urls = [];
            items.forEach((item) => {
                urls.push(item.prevUrl || item.url);
            });
            wx.previewImage({
                current: items[index].prevUrl || items[index].url,
                urls: urls
            });
            this.triggerEvent('preview', {
                index
            });
        },
        /**
         * 图片加载出错时触发
         * @param e
         */
        imageError(e) {
            const { items, maxCount, errorImage } = this.data;
            const index = e.currentTarget.dataset.imgindex;
            items[index].url = errorImage;
            items[index].prevUrl = errorImage;
            this.setData({
                items
            });
            if (maxCount > 0) {
                this.setData({
                    showUrls: items.slice(0, maxCount)
                });
            }
        },
        /**
         * 点击更多
         */
        handleMore() {
            this.triggerEvent('more');
        },
        /**
         * 单张图片
         */
        getSingleImageInfo(albumWidth) {
            const item = this.data.items[0];
            const src = this.data.items[0].url;
            const gap = this.data.rowGap; // 图片之间的间隔
            if (item.width && item.height) {
                const ratio = item.width / item.height;
                this.singleDisplayRule(albumWidth, gap, ratio);
            } else {
                wx.getImageInfo({
                    src: src,
                    success: (res) => {
                        const ratio = res.width / res.height;
                        this.singleDisplayRule(albumWidth, gap, ratio);
                    }
                });
            }
        },
        /**
         * 单张图片显示规则
         */
        singleDisplayRule(boxWidth, gap, ratio) {
            const Y = ((boxWidth - 2 * gap) / 3) * 2 + gap; // 图片1:1时显示的尺寸
            if (ratio < 1 / 3) {
                this.setData({
                    imageWidth: `${Y / 3}px`,
                    imageHeight: `${Y}px`
                });
            } else if (1 / 3 <= ratio && ratio < 0.75) {
                const imageHeight = Math.min(Math.floor(Y / ratio), (Y * 4) / 3);
                this.setData({
                    imageWidth: `${Y}px`,
                    imageHeight: `${imageHeight}px`
                });
            } else if (1.25 < ratio && ratio <= 3) {
                const imageWidth = Math.min(Math.floor(boxWidth / ratio), (boxWidth * 9) / 16);
                this.setData({
                    imageWidth: `${boxWidth}px`,
                    imageHeight: `${imageWidth}px`
                });
            } else if (0.75 <= ratio <= 1.25) {
                this.setData({
                    imageWidth: `${Y}px`,
                    imageHeight: `${Y / ratio}px`
                });
            } else if (3 < ratio) {
                this.setData({
                    imageWidth: `${Y}px`,
                    imageHeight: `${Y / 3}px`
                });
            }
        },
        /**
         * 四张图片展示规则
         */
        getFourImageInfo() {
            const query = this.createSelectorQuery();
            query
                .select('.mt-album')
                .boundingClientRect((res) => {
                    console.log(res);
                    const albumWidth = res.width; // 图片区域的总宽度
                    const rowGap = this.data.rowGap;
                    const imageWidth = `${(albumWidth - rowGap) / 2}`;
                    const imageHeight = (imageWidth * 3) / 4;
                    this.setData({
                        imageWidth: `${imageWidth}px`,
                        imageHeight: `${imageHeight}px`,
                        column: 2
                    });
                })
                .exec();
        }
    }
});
