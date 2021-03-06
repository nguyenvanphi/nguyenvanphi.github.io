var initialState = [
    {
        id : 1,
        name : 'Samsung Galaxy J7',
        image : 'images/m1.jpg',
        image1 : 'images/si2.jpg',
        image2 : 'images/si3.jpg',
        information1:'3 GB RAM | 16 GB ROM | Expandable Upto 256 GB',
        information2:'5.5 inch Full HD Display',
        information3:'13MP Rear Camera | 8MP Front Camera',
        information4:'3300 mAh Battery',
        information5:'Exynos 7870 Octa Core 1.6GHz Processor',
        price : 200,
    },
    {
        id : 2,
        name : 'OPPO A37',
        image : 'images/m2.jpg',
        image1 : 'images/m2.jpg',
        image2 : 'images/m2.jpg',
        information1:'3 GB RAM | 16 GB ROM | Expandable Upto 256 GB',
        information2:'5.5 inch Full HD Display',
        information3:'13MP Rear Camera | 8MP Front Camera',
        information4:'3300 mAh Battery',
        information5:'Exynos 7870 Octa Core 1.6GHz Processor',
        price : 230,
    },
    {
        id : 3,
        name : 'Apple iPhone X',
        image : 'images/m3.jpg',
        image1 : 'images/m3.jpg',
        image2 : 'images/m3.jpg',
        information1:'3 GB RAM | 16 GB ROM | Expandable Upto 256 GB',
        information2:'5.5 inch Full HD Display',
        information3:'13MP Rear Camera | 8MP Front Camera',
        information4:'3300 mAh Battery',
        information5:'Exynos 7870 Octa Core 1.6GHz Processor',
        price : 280,
    },
    {
        id : 4,
        name : 'Infinix Hot S3',
        image : 'images/mk1.jpg',
        image1 : 'images/mk1.jpg',
        image2 : 'images/mk1.jpg',
        information1:'3 GB RAM | 16 GB ROM | Expandable Upto 256 GB',
        information2:'5.5 inch Full HD Display',
        information3:'13MP Rear Camera | 8MP Front Camera',
        information4:'3300 mAh Battery',
        information5:'Exynos 7870 Octa Core 1.6GHz Processor',
        price : 300,
    },
    {
        id : 5,
        name : 'Moto X4',
        image : 'images/mk2.jpg',
        image1 : 'images/mk2.jpg',
        image2 : 'images/mk2.jpg',
        information1:'3 GB RAM | 16 GB ROM | Expandable Upto 256 GB',
        information2:'5.5 inch Full HD Display',
        information3:'13MP Rear Camera | 8MP Front Camera',
        information4:'3300 mAh Battery',
        information5:'Exynos 7870 Octa Core 1.6GHz Processor',
        price : 230,
    },
    {
        id : 6,
        name : 'iVooMi i Series',
        image : 'images/mk3.jpg',
        image1 : 'images/mk3.jpg',
        image2 : 'images/mk3.jpg',
        information1:'3 GB RAM | 16 GB ROM | Expandable Upto 256 GB',
        information2:'5.5 inch Full HD Display',
        information3:'13MP Rear Camera | 8MP Front Camera',
        information4:'3300 mAh Battery',
        information5:'Exynos 7870 Octa Core 1.6GHz Processor',
        price : 280,
    },
    {
        id : 7,
        name : 'Dell Vostro Laptop',
        image : 'images/mk4.jpg',
        image1 : 'images/mk4.jpg',
        image2 : 'images/mk4.jpg',
        information1:'CPU: Intel Core i5 Comet Lake, 10210U, 1.60 GHz',
        information2:'RAM: 	8 GB, DDR4 (On board +1 khe), 2666 MHz',
        information3:'Hard Drive: SSD 256GB NVMe PCIe',
        information4:'Screen: 15.6 inch, Full HD (1920 x 1080)',
        information5:'Card Screen: Intel UHD Graphics',
        price : 200,
    },
    {
        id : 8,
        name : 'Acer Laptop',
        image : 'images/mk5.jpg',
        image1 : 'images/mk5.jpg',
        image2 : 'images/mk5.jpg',
        information1:'CPU: Intel Core i5 Comet Lake, 10210U, 1.60 GHz',
        information2:'RAM: 	8 GB, DDR4 (On board +1 khe), 2666 MHz',
        information3:'Hard Drive: SSD 256GB NVMe PCIe',
        information4:'Screen: 15.6 inch, Full HD (1920 x 1080) ',
        information5:'Card Screen: Intel UHD Graphics',
        price : 230,
    },
    {
        id : 9,
        name : 'Lenovo',
        image : 'images/mk6.jpg',
        image1 : 'images/mk6.jpg',
        image2 : 'images/mk6.jpg',
        information1:'CPU: Intel Core i5 Comet Lake, 10210U, 1.60 GHz',
        information2:'RAM: 8 GB, DDR4 (On board +1 khe), 2666 MHz',
        information3:'Hard Drive: SSD 256GB NVMe PCIe',
        information4:'Screen: 15.6 inch, Full HD (1920 x 1080)',
        information5:'Card Screen: Intel UHD Graphics',
        price : 280,
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;