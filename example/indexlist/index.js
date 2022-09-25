/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
const ITEMS = [
    { name: '阿拉善盟', icon: '/example/images/meet.png', value: '001', key: 'A' },
    { name: '鞍山市', icon: '/example/images/meet.png', value: '002', key: 'A' },
    { name: '安庆市', icon: '/example/images/meet.png', value: '003', key: 'A' },
    { name: '北京市', icon: '/example/images/meet.png', value: '004', key: 'B' },
    { name: '保定市', icon: '/example/images/meet.png', value: '005', key: 'B' },
    { name: '包头市', icon: '/example/images/meet.png', value: '006', key: 'B' },
    { name: '重庆市', icon: '/example/images/meet.png', value: '007', key: 'C' },
    { name: '承德市', icon: '/example/images/meet.png', value: '008', key: 'C' },
    { name: '沧州市', icon: '/example/images/meet.png', value: '009', key: 'C' },
    { name: '大同市', icon: '/example/images/meet.png', value: '010', key: 'D' },
    { name: '大连市', icon: '/example/images/meet.png', value: '011', key: 'D' },
    { name: '大庆市', icon: '/example/images/meet.png', value: '012', key: 'D' },
    { name: '鄂州市', icon: '/example/images/meet.png', value: '013', key: 'E' },
    { name: '恩施土家族苗族自治州', icon: '/example/images/meet.png', value: '014', key: 'E' },
    { name: '福州市', icon: '/example/images/meet.png', value: '015', key: 'F' },
    { name: '佛山市', icon: '/example/images/meet.png', value: '016', key: 'F' },
    { name: '抚州市', icon: '/example/images/meet.png', value: '017', key: 'F' },
    { name: '广州市', icon: '/example/images/meet.png', value: '018', key: 'G' },
    { name: '桂林市', icon: '/example/images/meet.png', value: '019', key: 'G' },
    { name: '赣州市', icon: '/example/images/meet.png', value: '020', key: 'G' },
    { name: '邯郸市', icon: '/example/images/meet.png', value: '021', key: 'H' },
    { name: '衡水市', icon: '/example/images/meet.png', value: '022', key: 'H' },
    { name: '呼和浩特市', icon: '/example/images/meet.png', value: '023', key: 'H' },
    { name: '晋城市', icon: '/example/images/meet.png', value: '024', key: 'J' },
    { name: '晋中市', icon: '/example/images/meet.png', value: '025', key: 'J' },
    { name: '锦州市', icon: '/example/images/meet.png', value: '026', key: 'J' },
    { name: '昆明市', icon: '/example/images/meet.png', value: '027', key: 'K' },
    { name: '开封市', icon: '/example/images/meet.png', value: '028', key: 'K' },
    { name: '克拉玛依市', icon: '/example/images/meet.png', value: '029', key: 'K' },
    { name: '六安市', icon: '/example/images/meet.png', value: '030', key: 'L' },
    { name: '连云港市', icon: '/example/images/meet.png', value: '031', key: 'L' },
    { name: '娄底市', icon: '/example/images/meet.png', value: '032', key: 'L' },
    { name: '牡丹江市', icon: '/example/images/meet.png', value: '033', key: 'M' },
    { name: '茂名市', icon: '/example/images/meet.png', value: '034', key: 'M' },
    { name: '马鞍山市', icon: '/example/images/meet.png', value: '035', key: 'M' },
    { name: '南京市', icon: '/example/images/meet.png', value: '036', key: 'N' },
    { name: '南通市', icon: '/example/images/meet.png', value: '037', key: 'N' },
    { name: '宁波市', icon: '/example/images/meet.png', value: '038', key: 'N' },
    { name: '盘锦市', icon: '/example/images/meet.png', value: '039', key: 'P' },
    { name: '莆田市', icon: '/example/images/meet.png', value: '040', key: 'P' },
    { name: '萍乡市', icon: '/example/images/meet.png', value: '041', key: 'P' },
    { name: '秦皇岛市', icon: '/example/images/meet.png', value: '042', key: 'Q' },
    { name: '青岛市', icon: '/example/images/meet.png', value: '043', key: 'Q' },
    { name: '泉州市', icon: '/example/images/meet.png', value: '044', key: 'Q' },
    { name: '日照市', icon: '/example/images/meet.png', value: '045', key: 'R' },
    { name: '日喀则地区', icon: '/example/images/meet.png', value: '046', key: 'R' },
    { name: '石家庄市', icon: '/example/images/meet.png', value: '047', key: 'S' },
    { name: '上海市', icon: '/example/images/meet.png', value: '048', key: 'S' },
    { name: '沈阳市', icon: '/example/images/meet.png', value: '049', key: 'S' },
    { name: '唐山市', icon: '/example/images/meet.png', value: '050', key: 'T ' },
    { name: '太原市', icon: '/example/images/meet.png', value: '051', key: 'T' },
    { name: '通辽市', icon: '/example/images/meet.png', value: '052', key: 'T' },
    { name: '无锡市', icon: '/example/images/meet.png', value: '053', key: 'W' },
    { name: '温州市', icon: '/example/images/meet.png', value: '054', key: 'W' },
    { name: '武汉市', icon: '/example/images/meet.png', value: '055', key: 'W' },
    { name: '厦门市', icon: '/example/images/meet.png', value: '056', key: 'X' },
    { name: '孝感市', icon: '/example/images/meet.png', value: '057', key: 'X' },
    { name: '咸宁市', icon: '/example/images/meet.png', value: '058', key: 'X' },
    { name: '扬州市', icon: '/example/images/meet.png', value: '059', key: 'Y' },
    { name: '盐城市', icon: '/example/images/meet.png', value: '060', key: 'Y' },
    { name: '伊春市', icon: '/example/images/meet.png', value: '061', key: 'Y' },
    { name: '淄博市', icon: '/example/images/meet.png', value: '062', key: 'Z' },
    { name: '郑州市', icon: '/example/images/meet.png', value: '063', key: 'Z' },
    { name: '周口市', icon: '/example/images/meet.png', value: '064', key: 'Z' }
];
Page({
    data: {
        compIcon: '', // 组件图标
        compTitle: '', // 组件标题
        items: [],
        popupStatus: false
    },
    showDemo() {
        wx.navigateTo({
            url: '/example/indexlist/default/index'
        });
    },
    showDemo1() {
        wx.navigateTo({
            url: '/example/indexlist/avatar/index'
        });
    },
    showDemo2() {
        wx.navigateTo({
            url: '/example/indexlist/title/index'
        });
    },
    showDemo4() {
        wx.navigateTo({
            url: '/example/indexlist/desc/index'
        });
    },
    showDemo5() {
        wx.navigateTo({
            url: '/example/indexlist/hasDelete/index'
        });
    },
    showDemo6() {
        wx.navigateTo({
            url: '/example/indexlist/hasSelect/index'
        });
    },
    showDemo7() {
        wx.navigateTo({
            url: '/example/indexlist/search/index'
        });
    },
    onLoad(opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    itemClick(e) {
        console.log(e.detail.item);
    },
    togglePopup() {
        const { popupStatus } = this.data;
        const indexlistComp = this.selectComponent('.index-list');
        this.setData(
            {
                popupStatus: !this.data.popupStatus,
                items: popupStatus ? [] : ITEMS
            },
            () => {
                setTimeout(() => {
                    indexlistComp.initDom();
                }, 350);
            }
        );
    }
});
