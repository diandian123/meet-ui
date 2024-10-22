/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 类型
    type: {
      type: String,
      value: "normal",
    },
    // 触发方式：field（表单项） || other（其它）
    trigger: {
      type: String,
      value: "field",
    },
    // 选择器标题
    title: {
      type: String,
      value: "请选择",
    },
    // 表单项占位符
    placeholder: {
      type: String,
      value: "请选择",
    },
    // 确认文本
    confirmText: {
      type: String,
      value: "确认",
    },
    // 取消文本
    cancelText: {
      type: String,
      value: "取消",
    },
    // 确认文本颜色
    confirmColor: {
      type: String,
      value: "",
    },
    // 取消文本颜色
    cancleColor: {
      type: String,
      value: "#333333",
    },
    // 选项数据，如果存在childrens属性默认为联动选择
    items: {
      type: Array,
      value: [[]],
    },
    // 最大可视选项数
    visibleItems: {
      type: Number,
      value: 5,
    },
    // 默认选中项value，默认3列
    selectedValue: {
      type: Array,
      optionalTypes: [String],
      value: [0, 0, 0],
    },
    // 默认选中项Index，默认3列
    selectedIndex: {
      type: Array,
      optionalTypes: [Number],
      value: [0, 0, 0],
    },
    // 选择项内容：用于处理时间选择器数据回显
    selectedText: {
      type: String,
      value: "",
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      value: false,
    },
    // 显示删除按钮
    showDelete: {
      type: Boolean,
      value: false,
    },
    // 背景颜色
    bgColor: {
      type: String,
      value: "#fff",
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    visible: false, // 显示状态
    columns: [], // 组件内部的选项数据
    formatSelect: [], // 格式化后的selectIndex
  },
  /**
   * 数据监听
   */
  observers: {
    items(value) {
      // 切换items需要清除之前的缓存
      this.columns = "";
      const { selectedIndex } = this.data;
      let formatValue = [];
      // 兼容单列选择value的格式为[]或者[1,2,3]情况使其变为[[]]
      if (value.length === 0 || !Array.isArray(value[0])) {
        formatValue.push(value);
      } else {
        formatValue = value;
      }
      const columns = this.formatItems(formatValue.concat(), selectedIndex);
      // 避免时间选择器警告出现
      if (columns) {
        this.setData({
          columns,
        });
      }
    },
    selectedValue(value) {
      // selectedValue转selectedIndex
      const formatValue = this.formatValue(value);
      const { columns } = this.data;
      if (columns?.length > 0) {
        const selectedIndex = [];
        for (let i = 0; i <= columns.length - 1; i++) {
          for (let j = 0; j <= columns[i].length - 1; j++) {
            if (formatValue[i] === columns[i][j].value) {
              selectedIndex.push(j);
              break;
            }
            // 没有则默认选中第一项
            if (j === columns[i].length - 1) {
              selectedIndex.push(0);
            }
          }
        }
        this.setData({ selectedIndex });
      }
    },
    selectedIndex(value) {
      const formatValue = this.formatValue(value);
      if (formatValue.length === 0) {
        return;
      }
      this.setData({
        formatSelect: formatValue,
      });

      if (this.data.type !== "normal") {
        return;
      }

      if (!this.data.selectedText) {
        // 获取格式化后的items
        const columns = this.formatItems(
          this.data.items.concat(),
          this.data.selectedIndex
        );
        if (!columns || columns[0].length === 0) {
          return;
        }
        console.log(this.data.items);
        console.log(columns);
        let selectedText = "";
        // 以columns为基础遍历
        columns.map((item, index) => {
          return (selectedText += item[formatValue[index]]?.label);
        });
        this.setData({
          selectedText,
        });
      }
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 设置选择器选中项
     * @param {number} index  所在列索引
     * @param {array} items   数据项
     * @param {boolean} needReset   是否重置
     */
    setColumnItems(index, items, needReset = true) {
      const column = this.getColumn(index);
      if (column === null) {
        return Promise.reject(new Error("setColumnItems: 对应列不存在"));
      }
      // 数据项没有变化
      const isSame =
        JSON.stringify(column.data.items) === JSON.stringify(items);
      if (isSame) {
        return Promise.resolve();
      }
      let data = {
        items,
      };
      if (needReset) {
        data = { items, currentIndex: 0, offset: 0 };
      }
      return column._setData(data).then(() => {});
    },
    /**
     * 确定、取消按钮事件
     * @param {object} e
     */
    handlBtn(e) {
      const { type } = e.currentTarget.dataset;
      if (type === "confirm") {
        this.triggerEvent(type, {
          index: this.getIndexes(),
          value: this.getValues(),
        });
        // picker组件选中格式处理
        if (this.data.type === "normal") {
          const selectedText = [];
          this.getValues().map((item) => {
            selectedText.push(item.label);
          });
          this.setData({
            selectedText: selectedText.join(""),
          });
        }
      }
      this.setVisible();
    },
    /**
     * 处理显示状态
     */
    setVisible() {
      const { visible, disabled } = this.data;
      if (disabled) {
        this.triggerEvent("disable");
        return;
      }
      this.setData({ visible: !visible });
    },
    /**
     * 选中项变化
     * @param {object} e 事件对象
     */
    handleChange(e) {
      const { columnIndex, item } = e.detail;
      if (columnIndex === 0 && item.children) {
        // 二级联动数据处理
        if (item.children[0].children) {
          // 三级联动数据处理
          this.setColumnItems(2, item.children[0].children, true);
        }
        this.setColumnItems(1, item.children, true);
      } else if (columnIndex === 1 && item.children) {
        // 三级数据处理
        this.setColumnItems(2, item.children, true);
      }
      // 向外触发change事件，外部可以手动处理数据
      this.triggerEvent("change", {
        picker: this,
        columnIndex: columnIndex,
        index: this.getIndexes(),
        item: this.getValues(),
      });
    },
    /**
     * 获取选项索引列表
     */
    getIndexes() {
      return this.children.map((child) => child.data.currentIndex);
    },
    /**
     * 获取选项值列表
     */
    getValues() {
      return this.children.map((child) => child.getValue());
    },
    /**
     * 获取column实例
     * @param {number} index
     */
    getColumn(index) {
      return this.children[index];
    },
    /**
     * 格式化初始数据
     */
    formatItems(columns, selectedIndex) {
      if (columns.length === 0) {
        return;
      }
      if (this.columns) {
        return this.columns;
      }
      const firstColumnSelected = columns[0][selectedIndex[0]];
      // 多列联动数据处理
      if (firstColumnSelected && firstColumnSelected.children) {
        // 二级联动数据处理
        columns.push(firstColumnSelected.children);
        // 三级联动数据处理
        const secondColumnSelected =
          firstColumnSelected.children[selectedIndex[1]];
        if (secondColumnSelected?.children) {
          columns.push(secondColumnSelected.children);
        }
      }
      this.columns = columns;
      return columns;
    },
    /**
     * 删除事件
     */
    handleDelete() {
      const { columns } = this.data;
      // 重置索引
      columns.map((item, index) => {
        this.getColumn(index).setIndex(0);
      });
      this.setData({ selectedText: "" });
      this.triggerEvent("delete");
    },
    /**
     * 处理selectedIndex或selectedValue格式
     * 使其兼容单列情况下的输入数字的情况
     */
    formatValue(value) {
      let formatValue = [];
      if (!Array.isArray(value)) {
        formatValue.push(value);
      } else {
        formatValue = value;
      }
      return formatValue;
    },
  },
  lifetimes: {
    created() {
      Object.defineProperty(this, "children", {
        get: () => this.selectAllComponents(".mt-picker__column") || [],
      });
    },
  },
});
