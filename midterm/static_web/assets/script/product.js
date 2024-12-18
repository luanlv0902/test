const products = [
    {
        name: "Đồng hồ pha lê để bàn quà tặng khách hàng, quà tặng doanh nghiệp QT01",
        price: "850.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2023/10/z4822361888385_a1846144eb9401a4122c9f0593330304-min-1-1024x1024.jpg",
        discount: 50,
        date: "2023-05-12",
        popularity: 78
    },
    {
        name: "Đồng hồ decor thuận buồm xuôi gió DHA331",
        price: "980.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/10/dha331-3.jpg",
        isNew: true,
        date: "2023-08-21",
        popularity: 90
    },
    {
        name: "Đồng hồ hoa lá decor trang trí nội thất DHA118",
        price: "1.050.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2021/10/Dha-118-2.jpg",
        date: "2024-01-15",
        popularity: 65
    },
    {
        name: "Đồng hồ nghệ thuật trang trí nội thất DHA310",
        price: "1.200.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2023/12/z4964146940509_e0bfe429b4e2e3c8bc38f9ae7ab42412.jpg",
        isNew: true,
        date: "2024-02-20",
        popularity: 82
    },
    {
        name: "Đồng hồ nghệ thuật trang trí nội thất DHA311",
        price: "1.200.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2023/12/z4964146930694_ace6ab4173607851b3a45896aa9e78af.jpg",
        discount: 35,
        date: "2023-03-25",
        popularity: 73
    },
    {
        name: "Đồng hồ nghệ thuật trang trí nội thất DHA316",
        price: "1.150.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/431447615_708728268112596_5572117827573194601_n.jpg",
        discount: 25,
        date: "2023-11-05",
        popularity: 55
    },
    {
        name: "Đồng hồ nghệ thuật trang trí nội thất DHA317",
        price: "1.150.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/431675174_338217022020814_3265962644664062728_n.jpg",
        discount: 25,
        date: "2024-06-14",
        popularity: 92
    },
    {
        name: "Đồng hồ nghệ thuật trang trí nội thất DHA318",
        price: "1.020.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/435091275_1570300473541145_8221736996437100679_n.jpg",
        date: "2023-10-08",
        popularity: 68
    },
    {
        name: "Đồng hồ nghệ thuật trang trí nội thất DHA319",
        price: "1.280.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/435001539_336559559040277_8385888671226252026_n.jpg",
        isNew: true,
        date: "2023-12-17",
        popularity: 85
    },
    {
        name: "Đồng hồ nghệ thuật trang trí nội thất DHA320",
        price: "1.050.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/434635878_3665479370367095_8229055411880535470_n.jpg",
        date: "2023-09-14",
        popularity: 77
    },
    {
        name: "Đồng hồ nghệ thuật trang trí nội thất DHA323",
        price: "1.020.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/436986679_1503018203897646_3963765156766884089_n.jpg",
        isNew: true,
        date: "2023-06-11",
        popularity: 88
    },
    {
        name: "Đồng hồ treo tường nghệ thuật DH0138",
        price: "680.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2016/05/DH0138.jpg",
        date: "2023-07-19",
        popularity: 50
    },
    {
        name: "Đồng hồ treo tường nghệ thuật DHA11",
        price: "1.250.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2019/05/dong-ho-con-cong-doi-trang-tri-phong-khach-001-1377-0.jpg",
        discount: 30,
        date: "2023-04-22",
        popularity: 74
    },
    {
        name: "Đồng hồ treo tường nghệ thuật trang trí nội thất DHA314",
        price: "680.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/03/z5208992288444_10ec817ca76b3723c981aac52d885565-1-1024x1024.jpg",
        isNew: true,
        date: "2023-09-23",
        popularity: 69
    },
    {
        name: "Đồng hồ treo tường phòng khách DH911",
        price: "850.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2018/08/Dh-911-2.jpg",
        discount: 15,
        date: "2023-10-30",
        popularity: 52
    },
    {
        name: "Đồng hồ tuần lộc decor trang trí nội thất DHA115",
        price: "720.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2021/10/z2837039324947_5dfe39d1f7cadea8830f5952c3e4bd1c-min.jpg",
        isNew: true,
        date: "2023-05-17",
        popularity: 60
    },
    {
        name: "Đồng hồ decor thuận buồm xuôi gió DHA331",
        price: "1.000.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/10/dha331-3.jpg",
        discount: 20,
        date: "2023-04-15",
        popularity: 82
    },
    {
        name: "Đồng hồ hoa lá decor trang trí nội thất DHA118",
        price: "1.200.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2021/10/Dha-118-2.jpg",
        date: "2024-03-01",
        popularity: 60
    },
    {
        name: "Đồng hồ pha lê để bàn quà tặng QT01",
        price: "900.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2023/10/z4822361888385_a1846144eb9401a4122c9f0593330304-min-1-1024x1024.jpg",
        discount: 45,
        date: "2023-02-28",
        popularity: 77
    },
    {
        name: "Đồng hồ nghệ thuật DHA310",
        price: "1.250.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2023/12/z4964146940509_e0bfe429b4e2e3c8bc38f9ae7ab42412.jpg",
        date: "2024-05-07",
        popularity: 92
    },
    {
        name: "Đồng hồ trang trí nội thất DHA318",
        price: "1.000.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/435091275_1570300473541145_8221736996437100679_n.jpg",
        discount: 20,
        date: "2023-12-11",
        popularity: 70
    },
    {
        name: "Đồng hồ treo tường nghệ thuật DH0138",
        price: "750.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2016/05/DH0138.jpg",
        date: "2023-09-29",
        popularity: 65
    },
    {
        name: "Đồng hồ nghệ thuật DHA311",
        price: "1.300.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2023/12/z4964146930694_ace6ab4173607851b3a45896aa9e78af.jpg",
        discount: 30,
        date: "2024-01-25",
        popularity: 80
    },
    {
        name: "Đồng hồ nghệ thuật DHA319",
        price: "1.350.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/435001539_336559559040277_8385888671226252026_n.jpg",
        date: "2023-07-13",
        popularity: 84
    },
    {
        name: "Đồng hồ treo tường phòng khách DH911",
        price: "820.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2018/08/Dh-911-2.jpg",
        discount: 15,
        date: "2023-08-05",
        popularity: 67
    },
    {
        name: "Đồng hồ decor DHA320",
        price: "1.080.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/434635878_3665479370367095_8229055411880535470_n.jpg",
        discount: 20,
        date: "2024-04-19",
        popularity: 58
    },
    {
        name: "Đồng hồ trang trí nội thất DHA318",
        price: "1.000.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/435091275_1570300473541145_8221736996437100679_n.jpg",
        discount: 25,
        date: "2023-05-10",
        popularity: 89
    },
    {
        name: "Đồng hồ nghệ thuật DHA314",
        price: "1.300.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/03/z5208992288444_10ec817ca76b3723c981aac52d885565-1-1024x1024.jpg",
        discount: 15,
        date: "2023-12-20",
        popularity: 40
    },
    {
        name: "Đồng hồ treo tường nghệ thuật DHA11",
        price: "1.400.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2019/05/dong-ho-con-cong-doi-trang-tri-phong-khach-001-1377-0.jpg",
        discount: 5,
        date: "2024-01-05",
        popularity: 57
    },
    {
        name: "Đồng hồ nghệ thuật DHA316",
        price: "1.170.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/431447615_708728268112596_5572117827573194601_n.jpg",
        discount: 20,
        date: "2023-10-03",
        popularity: 79
    },
    {
        name: "Đồng hồ trang trí DHA115",
        price: "750.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2021/10/z2837039324947_5dfe39d1f7cadea8830f5952c3e4bd1c-min.jpg",
        date: "2024-06-14",
        popularity: 48
    },
    {
        name: "Đồng hồ treo tường DHA314",
        price: "680.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/03/z5208992288444_10ec817ca76b3723c981aac52d885565-1-1024x1024.jpg",
        discount: 15,
        date: "2023-11-09",
        popularity: 85
    },
    {
        name: "Đồng hồ decor DHA320",
        price: "1.080.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/434635878_3665479370367095_8229055411880535470_n.jpg",
        date: "2023-10-12",
        popularity: 92
    },
    {
        name: "Đồng hồ nghệ thuật DHA118",
        price: "1.100.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2021/10/Dha-118-2.jpg",
        discount: 15,
        date: "2023-12-15",
        popularity: 60
    },
    {
        name: "Đồng hồ decor DHA317",
        price: "1.200.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/431675174_338217022020814_3265962644664062728_n.jpg",
        discount: 25,
        date: "2024-05-18",
        popularity: 50
    },
    {
        name: "Đồng hồ nghệ thuật DHA331",
        price: "980.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/10/dha331-3.jpg",
        discount: 25,
        date: "2023-02-14",
        popularity: 76
    },
    {
        name: "Đồng hồ decor thuận buồm xuôi gió DHA331",
        price: "1.000.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/10/dha331-3.jpg",
        discount: 20,
        date: "2023-04-15",
        popularity: 82
    },
    {
        name: "Đồng hồ hoa lá decor trang trí nội thất DHA118",
        price: "1.200.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2021/10/Dha-118-2.jpg",
        date: "2024-03-01",
        popularity: 60
    },
    {
        name: "Đồng hồ pha lê để bàn quà tặng QT01",
        price: "900.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2023/10/z4822361888385_a1846144eb9401a4122c9f0593330304-min-1-1024x1024.jpg",
        discount: 45,
        date: "2023-02-28",
        popularity: 77
    },
    {
        name: "Đồng hồ nghệ thuật DHA310",
        price: "1.250.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2023/12/z4964146940509_e0bfe429b4e2e3c8bc38f9ae7ab42412.jpg",
        date: "2024-05-07",
        popularity: 92
    },
    {
        name: "Đồng hồ trang trí nội thất DHA318",
        price: "1.000.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/435091275_1570300473541145_8221736996437100679_n.jpg",
        discount: 35,
        date: "2023-12-11",
        popularity: 70
    },
    {
        name: "Đồng hồ treo tường nghệ thuật DH0138",
        price: "750.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2016/05/DH0138.jpg",
        date: "2023-09-29",
        popularity: 65
    },
    {
        name: "Đồng hồ nghệ thuật DHA311",
        price: "1.300.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2023/12/z4964146930694_ace6ab4173607851b3a45896aa9e78af.jpg",
        discount: 30,
        date: "2024-01-25",
        popularity: 80
    },
    {
        name: "Đồng hồ nghệ thuật DHA319",
        price: "1.350.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/435001539_336559559040277_8385888671226252026_n.jpg",
        date: "2023-07-13",
        popularity: 84
    },
    {
        name: "Đồng hồ treo tường phòng khách DH911",
        price: "820.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2018/08/Dh-911-2.jpg",
        discount: 15,
        date: "2023-08-05",
        popularity: 67
    },
    {
        name: "Đồng hồ decor DHA320",
        price: "1.080.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/434635878_3665479370367095_8229055411880535470_n.jpg",
        discount: 20,
        date: "2024-04-19",
        popularity: 58
    },
    {
        name: "Đồng hồ trang trí nội thất DHA318",
        price: "1.000.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/435091275_1570300473541145_8221736996437100679_n.jpg",
        discount: 25,
        date: "2023-05-10",
        popularity: 89
    },
    {
        name: "Đồng hồ nghệ thuật DHA314",
        price: "1.300.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/03/z5208992288444_10ec817ca76b3723c981aac52d885565-1-1024x1024.jpg",
        discount: 10,
        date: "2023-12-20",
        popularity: 40
    },
    {
        name: "Đồng hồ treo tường nghệ thuật DHA11",
        price: "1.400.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2019/05/dong-ho-con-cong-doi-trang-tri-phong-khach-001-1377-0.jpg",
        discount: 5,
        date: "2024-01-05",
        popularity: 57
    },
    {
        name: "Đồng hồ nghệ thuật DHA316",
        price: "1.170.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/431447615_708728268112596_5572117827573194601_n.jpg",
        discount: 20,
        date: "2023-10-03",
        popularity: 79
    },
    {
        name: "Đồng hồ trang trí DHA115",
        price: "750.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2021/10/z2837039324947_5dfe39d1f7cadea8830f5952c3e4bd1c-min.jpg",
        date: "2024-06-14",
        popularity: 48
    },
    {
        name: "Đồng hồ treo tường DHA314",
        price: "680.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/03/z5208992288444_10ec817ca76b3723c981aac52d885565-1-1024x1024.jpg",
        discount: 12,
        date: "2023-11-09",
        popularity: 85
    },
    {
        name: "Đồng hồ decor DHA320",
        price: "1.080.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/434635878_3665479370367095_8229055411880535470_n.jpg",
        date: "2023-10-12",
        popularity: 92
    },
    {
        name: "Đồng hồ nghệ thuật DHA118",
        price: "1.100.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2021/10/Dha-118-2.jpg",
        discount: 15,
        date: "2023-12-15",
        popularity: 60
    },
    {
        name: "Đồng hồ decor DHA317",
        price: "1.200.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/431675174_338217022020814_3265962644664062728_n.jpg",
        discount: 25,
        date: "2024-05-18",
        popularity: 50
    },
    {
        name: "Đồng hồ nghệ thuật DHA331",
        price: "980.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/10/dha331-3.jpg",
        discount: 25,
        date: "2023-02-14",
        popularity: 76
    },
    {
        name: "Đồng hồ decor thuận buồm xuôi gió DHA331",
        price: "1.000.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/10/dha331-3.jpg",
        discount: 20,
        date: "2023-04-15",
        popularity: 82
    },
    {
        name: "Đồng hồ hoa lá decor trang trí nội thất DHA118",
        price: "1.200.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2021/10/Dha-118-2.jpg",
        date: "2024-03-01",
        popularity: 60
    },
    {
        name: "Đồng hồ pha lê để bàn quà tặng QT01",
        price: "900.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2023/10/z4822361888385_a1846144eb9401a4122c9f0593330304-min-1-1024x1024.jpg",
        discount: 45,
        date: "2023-02-28",
        popularity: 77
    },
    {
        name: "Đồng hồ nghệ thuật DHA310",
        price: "1.250.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2023/12/z4964146940509_e0bfe429b4e2e3c8bc38f9ae7ab42412.jpg",
        date: "2024-05-07",
        popularity: 92
    },
    {
        name: "Đồng hồ trang trí nội thất DHA318",
        price: "1.000.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/435091275_1570300473541145_8221736996437100679_n.jpg",
        discount: 20,
        date: "2023-12-11",
        popularity: 70
    },
    {
        name: "Đồng hồ treo tường nghệ thuật DH0138",
        price: "750.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2016/05/DH0138.jpg",
        date: "2023-09-29",
        popularity: 65
    },
    {
        name: "Đồng hồ nghệ thuật DHA311",
        price: "1.300.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2023/12/z4964146930694_ace6ab4173607851b3a45896aa9e78af.jpg",
        discount: 30,
        date: "2024-01-25",
        popularity: 80
    },
    {
        name: "Đồng hồ nghệ thuật DHA319",
        price: "1.350.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/435001539_336559559040277_8385888671226252026_n.jpg",
        date: "2023-07-13",
        popularity: 84
    },
    {
        name: "Đồng hồ treo tường phòng khách DH911",
        price: "820.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2018/08/Dh-911-2.jpg",
        discount: 15,
        date: "2023-08-05",
        popularity: 67
    },
    {
        name: "Đồng hồ decor DHA320",
        price: "1.080.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/434635878_3665479370367095_8229055411880535470_n.jpg",
        discount: 20,
        date: "2024-04-19",
        popularity: 58
    },
    {
        name: "Đồng hồ trang trí nội thất DHA318",
        price: "1.000.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/435091275_1570300473541145_8221736996437100679_n.jpg",
        discount: 25,
        date: "2023-05-10",
        popularity: 89
    },
    {
        name: "Đồng hồ nghệ thuật DHA314",
        price: "1.300.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/03/z5208992288444_10ec817ca76b3723c981aac52d885565-1-1024x1024.jpg",
        discount: 10,
        date: "2023-12-20",
        popularity: 40
    },
    {
        name: "Đồng hồ treo tường nghệ thuật DHA11",
        price: "1.400.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2019/05/dong-ho-con-cong-doi-trang-tri-phong-khach-001-1377-0.jpg",
        discount: 5,
        date: "2024-01-05",
        popularity: 57
    },
    {
        name: "Đồng hồ nghệ thuật DHA316",
        price: "1.170.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/431447615_708728268112596_5572117827573194601_n.jpg",
        discount: 20,
        date: "2023-10-03",
        popularity: 79
    },
    {
        name: "Đồng hồ trang trí DHA115",
        price: "750.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2021/10/z2837039324947_5dfe39d1f7cadea8830f5952c3e4bd1c-min.jpg",
        date: "2024-06-14",
        popularity: 48
    },
    {
        name: "Đồng hồ treo tường DHA314",
        price: "680.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/03/z5208992288444_10ec817ca76b3723c981aac52d885565-1-1024x1024.jpg",
        discount: 10,
        date: "2023-11-09",
        popularity: 85
    },
    {
        name: "Đồng hồ decor DHA320",
        price: "1.080.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/434635878_3665479370367095_8229055411880535470_n.jpg",
        date: "2023-10-12",
        popularity: 92
    },
    {
        name: "Đồng hồ nghệ thuật DHA118",
        price: "1.100.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2021/10/Dha-118-2.jpg",
        discount: 15,
        date: "2023-12-15",
        popularity: 60
    },
    {
        name: "Đồng hồ decor DHA317",
        price: "1.200.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/04/431675174_338217022020814_3265962644664062728_n.jpg",
        discount: 25,
        date: "2024-05-18",
        popularity: 50
    },
    {
        name: "Đồng hồ nghệ thuật DHA331",
        price: "980.000 ₫",
        image: "https://tuongxinh.com.vn/wp-content/uploads/2024/10/dha331-3.jpg",
        discount: 20,
        date: "2023-02-14",
        popularity: 76
    }
];




const productsPerPage = 12;
const totalPages = Math.ceil(products.length / productsPerPage);
let currentPage = 1;

// Hàm chuyển đổi giá từ chuỗi có ký tự đặc biệt thành số nguyên
const parsePrice = (priceStr) => parseInt(priceStr.replace(/[^\d]/g, ""), 10);

// Hàm hiển thị các sản phẩm trên trang
function displayProducts(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToShow = products.slice(start, end);

    const productContainer = document.getElementById("product_main");
    productContainer.innerHTML = ""; // Xóa sản phẩm cũ

    productsToShow.forEach(product => {
        const mainProductClock = document.createElement("div");
        mainProductClock.className = "main-product-clock";

        const proContainer = document.createElement("div");
        proContainer.className = "product_container";

        const pro = document.createElement("div");
        pro.className = "product";

        const des = document.createElement("div");
        des.className = "description";

        const img = document.createElement("img");
        img.src = product.image;

        if (product.discount) {
            const discountBadge = document.createElement("span");
            discountBadge.className = "discount-badge";
            discountBadge.textContent = `-${product.discount}%`;
            mainProductClock.appendChild(discountBadge);
        }

        if (product.isNew) {
            const newBadge = document.createElement("span");
            newBadge.className = "new-badge";
            newBadge.textContent = "New";
            mainProductClock.appendChild(newBadge);
        }

        const name = document.createElement("span");
        name.textContent = product.name;
        name.title = product.name;

        const priceContainer = document.createElement("div");
        priceContainer.className = "price-container";

        // Kiểm tra nếu sản phẩm có giảm giá
        if (product.discount) {
            // Tính giá cũ và làm tròn đến số nguyên gần nhất
            const originalPrice = Math.round(parsePrice(product.price) / (1 - product.discount / 100));
            const discountedPrice = product.price; // Giá sau giảm

            // Hiển thị giá cũ (gạch chân) với định dạng đúng
            const oldPrice = document.createElement("del");
            oldPrice.textContent = formatPrice(originalPrice); // Định dạng giá cũ
            oldPrice.classList.add("old-price");  // Thêm class cho giá cũ

            const newPrice = document.createElement("h2");
            newPrice.textContent = formatPrice(parsePrice(discountedPrice)); // Định dạng giá mới
            newPrice.classList.add("new-price");  // Thêm class cho giá mới

            priceContainer.appendChild(oldPrice);
            priceContainer.appendChild(newPrice);
        } else {
            const newPrice = document.createElement("h2");
            newPrice.textContent = formatPrice(parsePrice(product.price)); // Định dạng giá mới
            priceContainer.appendChild(newPrice);
        }

        const addToCart = document.createElement("a");
        addToCart.href = "#";
        addToCart.innerHTML = '<i class="fa-solid fa-cart-plus cart"></i>';
        addToCart.onclick = () => addToCartHandler(product);

        // Gắn các phần tử vào productCard
        des.appendChild(img);
        des.appendChild(name);
        des.appendChild(priceContainer);
        pro.appendChild(des);
        pro.appendChild(addToCart);
        proContainer.appendChild(pro);
        mainProductClock.appendChild(proContainer);

        productContainer.appendChild(mainProductClock);
    });
}

// Thêm sự kiện thay đổi cho select box sắp xếp
document.getElementById("sort").addEventListener("change", function () {
    const sortOption = this.value;
    sortProducts(sortOption);
    displayProducts(currentPage);

});

// Hàm sắp xếp sản phẩm theo lựa chọn
function sortProducts(option) {
    switch (option) {
        case "sort-new":
            products.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case "sort-popular":
            products.sort((a, b) => b.popularity - a.popularity);
            break;
        case "sort-lowToHigh":
            products.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
            break;
        case "sort-highToLow":
            products.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
            break;
        default:
            location.reload();
            break;
    }
}

// Hàm format giá với dấu chấm (.) cho phân cách nghìn và thêm ký tự "đ" vào cuối
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' ₫'; // Thêm ký tự "đ" sau khi định dạng giá
}

function addToCartHandler(product) {
    cartManager.addItem(product);
    displayCartCount(); // Cập nhật số lượng sản phẩm trong giỏ
}

function setupPagination() {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = ""; // Xóa các nút phân trang cũ

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.className = i === currentPage ? "active" : "";
        button.addEventListener("click", () => {
            currentPage = i;
            displayProducts(currentPage);
            setupPagination();
            const h1Element = document.querySelector("h1"); // Cuộn đến thẻ h1
            h1Element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        paginationContainer.appendChild(button);
    }
}

// Hiển thị trang đầu tiên và tạo các nút phân trang
displayProducts(currentPage);
setupPagination();
