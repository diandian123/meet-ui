/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
// ui/datetime-picker/datetime-picker.js
const DAY = (function () {
    const Day = new Array(31);
    for (let i = 0; i < Day.length; i++) {
        if (i < 9) {
            Day[i] = { label: `${i + 1}日`, value: `0${i + 1}` };
        } else {
            Day[i] = { label: `${i + 1}日`, value: i + 1 };
        }
    }
    return Day;
})();
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 类型：datetime || date || year-month || time
        type: {
            type: String,
            value: 'datetime'
        },
        // 触发方式：field（表单项） || other（其它）
        trigger: {
            type: String,
            value: 'field'
        },
        // 标题
        title: {
            type: String,
            value: '请选择'
        },
        // 占位符
        placeholder: {
            type: String,
            value: '请选择'
        },
        // 选中值
        value: {
            type: String,
            value: ''
        },
        // 分钟间隔
        minuteGap: {
            type: Number,
            value: 1
        },
        // 最小时间
        minYear: {
            type: Number,
            value: new Date().getFullYear() - 5
        },
        // 最大时间
        maxYear: {
            type: Number,
            value: new Date().getFullYear() + 5
        },
        // 背景颜色
        bgColor: {
            type: String,
            value: '#fff'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        // 初始数据
        items: [[]],
        selectedIndex: [],
        leapYear: false, // 当前选中年是否为闰年
        selectedText: '' // 回显值
    },
    observers: {
        /**
         * @param {String} value 选择器type
         */
        type(value) {
            let nowTime = new Date();
            let selectedText = '';
            const defaultValue = this.data.value;
            if (this.data.value) {
                if (isNaN(new Date(defaultValue))) {
                    // 判断日期能否正确解析
                    console.log('传入日期格式错误');
                    return;
                }
                const defaultYear = new Date(defaultValue).getFullYear();
                const { minYear } = this.data;
                const realMinYear = defaultYear < minYear ? defaultYear : minYear;
                this.setData({
                    minYear: realMinYear
                });
                nowTime = new Date(defaultValue);
            }
            if (value === 'time') {
                // 选择时分
                const items = this.getTimeDate();
                this.setData({
                    items
                });
            } else if (value === 'year-month') {
                // 选择年月
                const items = this.getYearMonthDate();
                const nowYear = nowTime.getFullYear() - this.data.minYear;
                const nowMonth = nowTime.getMonth();
                const selectedIndex = [];
                // 传入默认值则field回显
                selectedText = defaultValue ? `${nowTime.getFullYear()}年${nowMonth + 1}月` : '';
                selectedIndex.push(nowYear, nowMonth);
                this.setData({
                    items,
                    selectedIndex,
                    selectedText
                });
            } else if (value === 'date') {
                // 选择年月日
                const items = this.getYearMonthDayDate();
                const nowYear = nowTime.getFullYear() - this.data.minYear;
                const nowMonth = nowTime.getMonth();
                const nowDay = nowTime.getDate() - 1;
                const selectedIndex = [];
                // 格式化回显内容
                const SelectMonth = nowMonth < 9 ? `0${nowMonth + 1}` : nowMonth + 1;
                const SelectDay = nowDay < 9 ? `0${nowDay + 1}` : nowDay + 1;
                // 传入默认值则field回显
                selectedText = defaultValue ? `${nowTime.getFullYear()}-${SelectMonth}-${SelectDay}` : '';
                // 设置初始index
                selectedIndex.push(nowYear, nowMonth, nowDay);
                this.setData({
                    items,
                    selectedIndex,
                    selectedText
                });
            } else if (value === 'datetime') {
                // 选择日期和时间
                const items = this.getDateTimeDate();
                const nowYear = nowTime.getFullYear() - this.data.minYear;
                const nowMonth = nowTime.getMonth();
                const nowDay = nowTime.getDate() - 1;
                const nowHour = nowTime.getHours();
                const nowMin = nowTime.getMinutes();
                const selectedIndex = [];
                // 格式化回显内容
                const SelectMonth = nowMonth < 9 ? `0${nowMonth + 1}` : nowMonth + 1;
                const SelectDay = nowDay < 9 ? `0${nowDay + 1}` : nowDay + 1;
                const SelectHour = nowHour < 10 ? `0${nowHour}` : nowHour;
                const SelectMin = nowMin < 10 ? `0${nowMin}` : nowMin;
                // 传入默认值则field回显
                selectedText = defaultValue
                    ? `${nowTime.getFullYear()}-${SelectMonth}-${SelectDay} ${SelectHour}:${SelectMin}`
                    : '';
                // 设置初始index
                selectedIndex.push(nowYear, nowMonth, nowDay, nowHour, nowMin);
                this.setData({
                    items,
                    selectedIndex,
                    selectedText
                });
            }
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 获取datepicker组件实例
        getPicker() {
            if (!this.picker) {
                this.picker = this.selectComponent('.mt-datepicker');
                const { picker } = this;
                const { setColumnItems } = picker;
                picker.setColumnItems = (...args) => setColumnItems.apply(picker, [...args, false]);
            }
            return this.picker;
        },
        // 获取时分数据
        getTimeDate() {
            const { minuteGap } = this.data;
            const Hour = new Array(24);
            const Min = [];
            // 初始分钟
            for (let i = 0; i < 60; i++) {
                // 是否传入时间段
                if (i % minuteGap !== 0) {
                    continue;
                }
                if (i < 10) {
                    Min.push({ label: `0${i}分`, value: `0${i}` });
                } else {
                    Min.push({ label: `${i}分`, value: i });
                }
            }
            // 初始化小时
            for (let i = 0; i < Hour.length; i++) {
                if (i < 10) {
                    Hour[i] = { label: `0${i}时`, value: `0${i}` };
                } else {
                    Hour[i] = { label: `${i}时`, value: i };
                }
            }
            return [Hour, Min];
        },
        // 获取年月数据
        getYearMonthDate() {
            const { maxYear, minYear } = this.data;
            const Month = new Array(12);
            const Year = [];
            // 初始化月份
            for (let i = 0; i < 12; i++) {
                if (i < 9) {
                    Month[i] = { label: `${i + 1}月`, value: `0${i + 1}` };
                } else {
                    Month[i] = { label: `${i + 1}月`, value: i + 1 };
                }
            }
            // 初始化年份
            for (let i = minYear; i <= maxYear; i++) {
                Year.push({ label: `${i}年`, value: i });
            }
            return [Year, Month];
        },
        // 获取年月日数据
        getYearMonthDayDate() {
            const YearMonthDate = this.getYearMonthDate();
            const nowMonth = new Date().getMonth() + 1;
            const fullYear = new Date().getFullYear();
            const Day1 = DAY.concat();
            // 将要初始化的日期天数
            let monDay = [];
            const shortMonth = [4, 6, 9, 11];
            if (this.judgeLeapYear(fullYear) && nowMonth === 2) {
                // 闰年2月情况
                this.setData({
                    leapYear: this.judgeLeapYear(fullYear)
                });
                monDay = Day1.splice(0, Day1.length - 2);
            } else if (shortMonth.indexOf(nowMonth) > -1 && nowMonth === 2) {
                // 非闰年2月情况
                monDay = Day1.splice(0, Day1.length - 3);
            } else if (shortMonth.indexOf(nowMonth) > -1 && nowMonth !== 2) {
                // [4,6,9,11]月份日期
                monDay = Day1.splice(0, Day1.length - 1);
            } else {
                // [1,3,5,7,8,10月份日期]
                monDay = Day1;
            }
            YearMonthDate.push(monDay);

            return YearMonthDate;
        },
        // 获取日期与时间数据
        getDateTimeDate() {
            const YearMonthDayDate = this.getYearMonthDayDate();
            const TimeDate = this.getTimeDate();
            return [...YearMonthDayDate, ...TimeDate];
        },
        /**
         * 时间联动函数
         * @param {*} columnIndex 为当前选择的列
         * @param {*} value 选中的值
         */
        changeTime(columnIndex, value) {
            const { selectedIndex, minYear } = this.data;
            // 获取上次选择的年数据
            const lastSelectYear = selectedIndex[0] + minYear;
            // 获取上次选择的月份数据
            const lastSelectMonth = selectedIndex[1] + 1;
            // 获取上次选择的日期数据
            const selectDay = selectedIndex[2] + 1;
            if (columnIndex === 0) {
                // 判断选中的年份是否为闰年
                const leapYear = this.judgeLeapYear(value);
                // 计算上次选中值的index
                const lastSelectValue = lastSelectYear;
                // 只更新2月份情况
                if (selectedIndex[1] === 1) {
                    this.judgeDate(columnIndex, lastSelectValue, value, selectDay);
                }
                this.setData({
                    [`selectedIndex[${columnIndex}]`]: value - minYear,
                    leapYear
                });
            } else if (columnIndex === 1) {
                this.judgeDate(columnIndex, lastSelectMonth, value, selectDay);
                // 更新操作列对应的selectedIndex
                this.setData({
                    [`selectedIndex[${columnIndex}]`]: value - 1
                });
            } else if (columnIndex === 2) {
                // 更新操作列对应的selectedIndex
                this.setData({
                    [`selectedIndex[${columnIndex}]`]: value - 1
                });
            } else {
                // 更新操作列对应的selectedIndex
                this.setData({
                    [`selectedIndex[${columnIndex}]`]: value
                });
            }
        },
        /**
         * 判断日期是否更新
         * @param {*} columnIndex 操作的列
         * @param {*} lastSelectValue 上次选中的值
         * @param {*} value 本次选中的值
         * @param {*} selectDay 当前选中的日期
         */
        judgeDate(columnIndex, lastSelectValue, value, selectDay) {
            const longMonth = [1, 3, 5, 7, 8, 10, 12];
            const shortMonth = [2, 4, 6, 9, 11];
            // 拷贝天数数组
            const Day = DAY.concat();
            // 将要更新的天数
            let monDay = [];
            // 当月的最大天数
            let realDay = '';
            const { leapYear } = this.data;
            const picker = this.getPicker();
            // 闰年情况处理
            if (columnIndex === 0 && this.judgeLeapYear(lastSelectValue) !== this.judgeLeapYear(value)) {
                if (this.judgeLeapYear(lastSelectValue)) {
                    // 闰年切换成非闰年的情况
                    monDay = Day.splice(0, Day.length - 3);
                } else {
                    // 非闰年切换成闰年的情况
                    monDay = Day.splice(0, Day.length - 2);
                }
                // 当前选中的日期是否超过月份最大值
                realDay = selectDay > monDay.length ? monDay.length : selectDay;
                // 更新日期列
                picker.setColumnItems(2, monDay, false);
                // 更新日期列的selectedIndex
                this.setData({
                    [`selectedIndex[2]`]: realDay - 1
                });
            } else if (columnIndex === 1) {
                // 两次选择都是[1,3,5,7,8,10,12]情况下不需要更新
                if (longMonth.indexOf(lastSelectValue) > -1 && longMonth.indexOf(value) > -1) {
                    console.log('不需要更新');
                    return;
                } else if (shortMonth.indexOf(lastSelectValue) > -1 && shortMonth.indexOf(value) > -1) {
                    // 两次选择都是[2,4,6,9,11]的情况,但2月份来需要换单独处理
                    if (lastSelectValue === 2) {
                        monDay = Day.splice(0, Day.length - 1);
                    } else if (value === 2) {
                        // leapYear 闰年非闰年2月天数不一样
                        monDay = Day.splice(0, leapYear ? Day.length - 2 : Day.length - 3);
                    } else {
                        return;
                    }
                    // 当前选中的日期是否超过月份最大值
                    realDay = selectDay > monDay.length ? monDay.length : selectDay;
                    // 更新日期数据
                    picker.setColumnItems(2, monDay, false);
                    // 更新日期列的selectedIndex
                    this.setData({
                        [`selectedIndex[2]`]: realDay - 1
                    });
                    return;
                } else if (shortMonth.indexOf(value) > -1) {
                    // 月份由[1,3,5,7,8,10,12]切换成[2,4,6,9,11]
                    if (value === 2) {
                        monDay = Day.splice(0, leapYear ? Day.length - 2 : Day.length - 3);
                    } else {
                        monDay = Day.splice(0, Day.length - 1);
                    }
                    // 当前选中的日期是否超过月份最大值
                    realDay = selectDay > monDay.length ? monDay.length : selectDay;
                    // 更新日期数据
                    picker.setColumnItems(2, monDay, false);
                    // 更新日期列的selectedIndex
                    this.setData({
                        [`selectedIndex[2]`]: realDay - 1
                    });
                    return;
                } else if (longMonth.indexOf(value) > -1) {
                    // 月份由[2,4,6,9,11]切换成[1,3,5,7,8,10,12]
                    // 更新日期
                    picker.setColumnItems(2, Day, false);
                    return;
                }
            }
        },
        /**
         * 判断是否为闰年
         * @param {number} year
         */
        judgeLeapYear(year) {
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * change事件
         * @param {object} e
         */
        onChange(e) {
            const { columnIndex, item, index } = e.detail;
            const { type } = this.data;
            if (type === 'datetime' || type === 'date') {
                this.changeTime(columnIndex, +item[columnIndex].value);
            }
            this.triggerEvent('change', {
                columnIndex: columnIndex,
                index: index,
                item: item
            });
        },
        /**
         * 确认选中事件
         * @param {object} e
         */
        onConfirm(e) {
            const { type } = this.data;
            const { value } = e.detail;
            const formatValue = this.formatDate(value, type);
            this.setData({
                selectedText: formatValue
            });
            this.triggerEvent('confirm', { formatValue, ...e.detail });
        },
        /**
         * 格式化时间
         * @param {*} value 选中的个列值
         * @param {*} type  时间选择器类型
         */
        formatDate(value, type) {
            const selectedText = [];
            let formatValue = '';
            if (type === 'datetime' || type === 'time' || type === 'date') {
                value.map((item) => {
                    selectedText.push(item.value);
                });
            } else {
                value.map((item) => {
                    selectedText.push(item.label);
                });
            }
            if (type === 'datetime') {
                // 日期 + 时间
                formatValue = `${selectedText.slice(0, 3).join('-')} ${selectedText.slice(3, 5).join(':')}`;
            } else if (type === 'time') {
                // 时间显示
                formatValue = selectedText.join(':');
            } else if (type === 'date') {
                // 日期显示
                formatValue = selectedText.join('-');
            } else {
                // 其它
                formatValue = selectedText.join('');
            }
            return formatValue;
        },
        /**
         * 处理显示状态
         */
        setVisible() {
            const picker = this.getPicker();
            picker.setVisible();
        }
    }
});
