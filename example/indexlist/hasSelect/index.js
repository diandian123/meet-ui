/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
const ITEMS = [
    { name: '阿拉善盟', value: '000', checked: false, key: 'A' },
    { name: '鞍山市', value: '001', checked: false, key: 'A' },
    { name: '安庆市', value: '002', checked: false, key: 'A' },
    { name: '北京市', value: '003', checked: false, key: 'B' },
    { name: '保定市', value: '004', checked: false, key: 'B' },
    { name: '包头市', value: '005', checked: false, key: 'B' },
    { name: '重庆市', value: '006', checked: false, key: 'C' },
    { name: '承德市', value: '007', checked: false, key: 'C' },
    { name: '沧州市', value: '008', checked: false, key: 'C' },
    { name: '大同市', value: '009', checked: false, key: 'D' },
    { name: '大连市', value: '010', checked: false, key: 'D' },
    { name: '大庆市', value: '011', checked: false, key: 'D' },
    { name: '鄂州市', value: '012', checked: false, key: 'E' },
    { name: '恩施土家族苗族自治州', value: '013', checked: false, key: 'E' },
    { name: '福州市', value: '014', checked: false, key: 'F' },
    { name: '佛山市', value: '015', checked: false, key: 'F' },
    { name: '抚州市', value: '016', checked: false, key: 'F' },
    { name: '广州市', value: '017', checked: false, key: 'G' },
    { name: '桂林市', value: '018', checked: false, key: 'G' },
    { name: '赣州市', value: '019', checked: false, key: 'G' },
    { name: '邯郸市', value: '020', checked: false, key: 'H' },
    { name: '衡水市', value: '021', checked: false, key: 'H' },
    { name: '呼和浩特市', value: '022', checked: false, key: 'H' },
    { name: '晋城市', value: '023', checked: false, key: 'J' },
    { name: '晋中市', value: '024', checked: false, key: 'J' },
    { name: '锦州市', value: '025', checked: false, key: 'J' },
    { name: '昆明市', value: '026', checked: false, key: 'K' },
    { name: '开封市', value: '027', checked: false, key: 'K' },
    { name: '克拉玛依市', value: '028', checked: false, key: 'K' },
    { name: '六安市', value: '029', checked: false, key: 'L' },
    { name: '连云港市', value: '030', checked: false, key: 'L' },
    { name: '娄底市', value: '031', checked: false, key: 'L' },
    { name: '牡丹江市', value: '032', checked: false, key: 'M' },
    { name: '茂名市', value: '033', checked: false, key: 'M' },
    { name: '马鞍山市', value: '034', checked: false, key: 'M' },
    { name: '南京市', value: '035', checked: false, key: 'N' },
    { name: '南通市', value: '036', checked: false, key: 'N' },
    { name: '宁波市', value: '037', checked: false, key: 'N' },
    { name: '盘锦市', value: '038', checked: false, key: 'P' },
    { name: '莆田市', value: '039', checked: false, key: 'P' },
    { name: '萍乡市', value: '040', checked: false, key: 'P' },
    { name: '秦皇岛市', value: '041', checked: false, key: 'Q' },
    { name: '青岛市', value: '042', checked: false, key: 'Q' },
    { name: '泉州市', value: '043', checked: false, key: 'Q' },
    { name: '日照市', value: '044', checked: false, key: 'R' },
    { name: '日喀则地区', value: '045', checked: false, key: 'R' },
    { name: '石家庄市', value: '046', checked: false, key: 'S' },
    { name: '上海市', value: '047', checked: false, key: 'S' },
    { name: '沈阳市', value: '048', checked: false, key: 'S' },
    { name: '唐山市', value: '049', checked: false, key: 'T ' },
    { name: '太原市', value: '050', checked: false, key: 'T' },
    { name: '通辽市', value: '051', checked: false, key: 'T' },
    { name: '无锡市', value: '052', checked: false, key: 'W' },
    { name: '温州市', value: '053', checked: false, key: 'W' },
    { name: '武汉市', value: '054', checked: false, key: 'W' },
    { name: '厦门市', value: '055', checked: false, key: 'X' },
    { name: '孝感市', value: '056', checked: false, key: 'X' },
    { name: '咸宁市', value: '057', checked: false, key: 'X' },
    { name: '扬州市', value: '058', checked: false, key: 'Y' },
    { name: '盐城市', value: '059', checked: false, key: 'Y' },
    { name: '伊春市', value: '060', checked: false, key: 'Y' },
    { name: '淄博市', value: '061', checked: false, key: 'Z' },
    { name: '郑州市', value: '062', checked: false, key: 'Z' },
    { name: '周口市', value: '063', checked: false, key: 'Z' }
];
Page({
    data: {
        items: [],
        checkArr: [],
        hasChecked: false // 全选
    },
    onLoad() {
        const items = JSON.parse(JSON.stringify(ITEMS));
        this.setData({ items });
        this.checkArr = [];
    },

    handleFilterChange(e) {
        const { hasChecked, items } = this.data;
        const FileterAll = items.map((item) => {
            item.checked = !hasChecked;
            return item;
        });
        this.checkArr = FileterAll.filter((item) => item.checked).map((item) => item.value);
        this.setData({
            hasChecked: !hasChecked,
            items: FileterAll,
            checkArr: this.checkArr
        });
        console.log(e, this.checkArr);
    },
    selectItem(e) {
        const { items } = this.data;
        const { index, item } = e.detail;
        const checkItem = `items[${index}].checked`;
        const checkId = item.value;
        let { hasChecked } = this.data;
        if (item.checked) {
            hasChecked = false;
            this.checkArr.splice(index, 1);
        } else {
            this.checkArr.push(checkId);
            if (this.checkArr.length === items.length) {
                hasChecked = true;
            }
        }
        this.setData({
            [checkItem]: !item.checked,
            checkArr: this.checkArr,
            hasChecked
        });
    },
    sendChecked() {
        console.log('选择的id是', this.checkArr);
    }
});
