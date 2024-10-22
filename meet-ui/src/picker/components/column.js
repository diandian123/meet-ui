/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
/**
 * 设置对应的选中项
 * @param {number} num 当前选中项
 * @param {number} min 可以选中的最小值
 * @param {number} max 可以选中的最大值
 */
const range = function (num, min, max) {
  return Math.min(Math.max(num, min), max);
};

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 所在列索引位置
    columnIndex: {
      type: Number,
      value: 0,
    },
    // 数据项
    items: {
      type: Array,
      value: [],
    },
    // 选中项
    current: {
      type: Number,
      value: 0,
    },
    // 展示的行数
    visibleItems: {
      type: Number,
      value: 5,
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    startY: 0, // 触摸开始时的Y轴距离
    offset: 0, // 当前的选项偏移量
    duration: 0, // 动画时长
    startOffset: 0, // 记录滚动开始时的选项偏移量
    currentIndex: 0, // 当前选中项
    itemHeight: 0, // 选项高度
  },
  /**
   * 数据监听
   */
  observers: {
    items(value) {
      if (this.data.itemHeight || value.length === 0) {
        return;
      } else {
        this.getPickerInfo();
      }
    },
    current(value) {
      this.setIndex(value);
    },
  },
  lifetimes: {
    ready() {
      this.instantDistance = ""; // 瞬间距离
      this.lastClientY = ""; // 上次垂直方向距离
      const { current } = this.data;
      // 获取选项的高度
      this.createSelectorQuery()
        .select(".mt-picker__item")
        .boundingClientRect((rect) => {
          this._setData({
            itemHeight: rect?.height,
            currentIndex: current,
          }).then(() => {
            this.setIndex(current);
          });
        })
        .exec();
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 滑动开始
     * @param {object} e
     */
    onTouchStart(e) {
      this.setData({
        startY: e.touches[0].clientY,
        startOffset: this.data.offset,
        duration: 0,
      });
    },
    /**
     * 滑动
     * @param {object} e
     */
    onTouchMove(e) {
      const { data } = this;
      const deltaY = e.touches[0].clientY - data.startY; // 滑动距离
      this.instantDistance = (e.touches[0].clientY - this.lastClientY).toFixed(
        2
      ); // 瞬间距离
      this.lastClientY = e.touches[0].clientY; // 记录下当前触点相对于可见视区上边沿的的Y坐标
      this.setData({
        offset: range(
          data.startOffset + deltaY,
          -(this.getCount() * data.itemHeight),
          data.itemHeight
        ),
      });
    },
    /**
     * 滑动结束
     */
    onTouchEnd() {
      const { data } = this;
      if (data.offset !== data.startOffset) {
        this.setData({ duration: 200 });
        let index = range(
          Math.round(-data.offset / data.itemHeight),
          0,
          this.getCount() - 1
        );
        // 快速滑动阈值
        if (this.instantDistance < -4) {
          // 瞬时下移
          index += 2;
        } else if (this.instantDistance > 4) {
          // 瞬时上移
          index -= 2;
        }
        this.setIndex(index, true);
      }
    },
    /**
     * 点击选项
     * @param {object} e
     */
    handleClick(e) {
      const { index } = e.currentTarget.dataset;
      this.setIndex(index, true);
    },
    /**
     * 设置选中项
     * @param {number} index
     * @param {boolean} userAction // 是否用户行为
     */
    setIndex(index, userAction) {
      const { data } = this;
      index = this.adjustIndex(index) || 0;
      const offset = -index * data.itemHeight;
      if (index !== data.currentIndex) {
        return this._setData({
          offset,
          currentIndex: index,
        }).then(() => {
          if (userAction) {
            this.triggerEvent("change", {
              columnIndex: data.columnIndex,
              index,
              item: data.items[index],
            });
          }
        });
      }
      return this._setData({ offset });
    },
    /**
     * 调整索引位置
     * @param {*} index
     */
    adjustIndex(index) {
      const { data } = this;
      const count = this.getCount();
      index = range(index, 0, count);
      for (let i = index; i < count; i++) {
        if (!this.isDisabled(data.items[i])) {
          return i;
        }
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(data.items[i])) {
          return i;
        }
      }
    },
    /**
     * 获取选项数量
     */
    getCount() {
      return this.data.items.length;
    },
    /**
     * 禁用检查
     * @param {object} item
     */
    isDisabled(item) {
      return item && item.disabled;
    },
    /**
     * 根据值设置选中项
     * @param {*} param
     */
    setValue({ value }) {
      const { items } = this.data;
      for (let i = 0; i < items.length; i++) {
        if (items[i].value === value) {
          return this.setIndex(i);
        }
      }
      return Promise.resolve();
    },
    // 获取选择项
    getValue() {
      const { data } = this;
      // 去除联动选项的children属性
      return {
        label: data.items[data.currentIndex].label,
        value: data.items[data.currentIndex].value,
      };
    },
    // 更新数据
    _setData(data) {
      this.setData(data);
      return new Promise((resolve) => wx.nextTick(resolve));
    },
    getPickerInfo() {
      // 获取选项的高度
      this.createSelectorQuery()
        .select(".mt-picker__item")
        .boundingClientRect((rect) => {
          this._setData({
            itemHeight: rect?.height,
          });
        })
        .exec();
    },
  },
});
