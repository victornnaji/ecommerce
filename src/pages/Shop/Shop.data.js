const SHOP_DATA = [
    {
      id: 1,
      title: 'Kids',
      routeName: 'kids',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/12/24/13/35/baby-3036925_1280.jpg',
          price: 25,
          newIn: true,
          category: 'kids',
          discount: "25%",
          oldPrice: 75
        },
        {
          id: 2,
          name: 'Brown Brim for babies',
          imageUrl: 'https://cdn.pixabay.com/photo/2014/12/14/16/05/teddy-bear-567952__340.jpg',
          price: 18,
          newIn: true,
           category: 'kids'
        },
        {
          id: 3,
          name: 'kids bathroom slippers',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/07/25/21/07/slippers-2539534__340.jpg',
          price: 35,
          newIn: false,
          category: 'kids',
          discount: "20%",
          oldPrice: 88
        },
        {
          id: 4,
          name: 'Baby Ray bern Shoes',
          imageUrl: 'https://cdn.pixabay.com/photo/2016/09/27/12/31/shoes-1698239__340.jpg',
          price: 25,
          newIn: true,
          category: 'kids'
        },
        {
          id: 5,
          name: 'Baby winter jacket',
          imageUrl: 'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/500x659/products/8479/16221/5CrHTWbo__62354.1561831491.jpg?c=2',
          price: 18,
          newIn: true,
           category: 'kids'
        },
        {
          id: 6,
          name: 'Baby Molo Herb Snow Suit',
          imageUrl: 'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/500x659/products/8196/16435/bdCnucyw__77535.1565214547.jpg?c=2',
          price: 14,
          newIn: false,
           category: 'kids'
        },
        {
          id: 7,
          name: 'Pink fleece suit',
          imageUrl: 'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/500x659/products/7301/14588/NV9bqOJA.jpeg__29254.1535915144.jpg?c=2',
          price: 18,
          newIn: false,
           category: 'kids'
        },
        {
          id: 8,
          name: 'Wolf Boot for babies',
          imageUrl: 'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/500x659/products/7285/14623/e6zAwrKQ.jpeg__60220.1535920434.jpg?c=2',
          price: 14,
          newIn: false,
          category: 'kids',
          discount: "10%",
          oldPrice: 19
        },
        {
          id: 9,
          name: 'Cute Sneakers',
          imageUrl: 'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/500x659/products/6372/10471/kj81518__85277.1484435598.jpg?c=2',
          price: 16,
          newIn: false,
           category: 'kids'
        }
      ]
    },
    {
      id: 2,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 10,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25,
          newIn: true,
          category: 'women',
          discount: "55%",
          oldPrice: 75
        },
        {
          id: 11,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20,
          newIn: true,
          category: 'women'
        },
        {
          id: 12,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80,
          newIn: true,
          category: 'women'
        },
        {
          id: 13,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80,
          newIn: false,
          category: 'women'
        },
        {
          id: 14,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45,
          newIn: false,
          category: 'women',
          discount: "5%",
          oldPrice: 50
        },
        {
          id: 15,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135,
          newIn: false,
          category: 'women'
        },
        {
          id: 16,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20,
          newIn: false,
          category: 'women'
        },
        {
          id: 17,
          name: 'Full fit black',
          imageUrl: ' https://cdn.pixabay.com/photo/2017/09/19/21/37/fashion-2766734__340.jpg',
          price: 200,
          newIn: false,
          category: 'women'
        },
        {
          id: 18,
          name: 'Winter boot',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/06/02/23/15/winter-boots-795706__340.jpg',
          price: 150,
          newIn: false,
          category: 'women'
        }
      ]
    },
    {
      id: 3,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 19,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325,
          newIn: true,
          category: 'Men'
        },
        {
          id: 20,
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20,
          newIn: true,
          category: 'Men'
        },
        {
          id: 21,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25,
          newIn: true,
          category: 'Men'
        },
        {
          id: 22,
          name: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25,
          newIn: false,
          category: 'Men'
        },
        {
          id: 23,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40,
          newIn: false,
          category: 'Men',
          discount: "25%",
          oldPrice: 75
        },
        {
          id: 24,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25,
          newIn: false,
          category: 'Men'
        },
        {
          id: 25,
          name: 'Men 2 piece blazer',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911330__340.jpg',
          price: 80,
          newIn: false,
          category: 'Men'
        },
        {
          id: 26,
          name: 'Fashion shoe leather',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/01/16/15/01/fashion-601565__340.jpg',
          price: 65,
          newIn: false,
          category: 'Men'
        },
        {
          id: 27,
          name: 'Skinny pant blue',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/10/11/17/26/male-3740354__340.jpg',
          price: 68,
          newIn: false,
          category: 'Men'
        }
      ]
    }
  ];

  export default SHOP_DATA;