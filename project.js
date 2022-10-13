var bikes = [
    {
      name: "bitwin",
      price: "$200",
      category: "ROCKRIDER",
      imgSrc: "https://images.jdmagicbox.com/quickquotes/images_main/btwin-riverside-100-hybrid-cycle-m-211004007-2y9f3.jpg",
    },
    {
      name: "Trail X",
      price: "200dt",
      category: "ROCKRIDER",
      imgSrc: "https://www.jamisbikes.com/wp-content/uploads/2021/08/22_trailxa1_mash.png",
    },
    {
      name: " RODEO 6020",
      price: "250 dt",
      category: "Star wars",
      imgSrc: "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/l/j/ljll.jpg",
    },
    {
      name: "Evolution 26",
      price: "250dt",
      category: "star wars",
      imgSrc: "https://i5.walmartimages.ca/images/Enlarge/002/147/999999-836467002147.jpg",
    },
    {
      name: "Apache ",
      price: "300 dt",
      category: "ROCKSTAR",
      imgSrc: "https://www.bigbike-magazine.com/media/guide_matos/vtt_2020/specialized_2020_chisel__crop_1000x604.jpg",
    },
    {
      name: "JOKER",
      price: "300 dt",
      category: "ROCKSTAR",
      imgSrc: "https://www.zoom.com.tn/50612-thickbox_default/bicyclette-vtt-prado-apache-18-vitesse-24-grisjaune.jpg",
    },
    {
      name: "MANTricycle Love",
      price: "400 dt",
      category: "Puk Rodeo T227",
      imgSrc: "https://www.zoom.com.tn/50616-thickbox_default/bicyclette-vtt-prado-double-suspension-bleu.jpg",
    },
    {
      name: "Tricycle Love",
      price: "400 dt",
      category: "Puk Rodeo T227",
      imgSrc: "https://www.zoom.com.tn/50610-thickbox_default/velo-enfant-frozen-pour-fille-20-blancbleu.jpg",
    },
    {
      name: "VTT PRADO",
      price: "450 dt",
      category: "APACHE",
      imgSrc: "https://www.zoom.com.tn/50614-thickbox_default/bicyclette-vtt-prado-apache-18-vitesse-24-bleu-rose.jpg",
    },
    {
      name: "ptt",
      price: "450 dt",
      category: "APACHE",
      imgSrc: "https://www.zoom.com.tn/50173-thickbox_default/bicyclette-vtt-ferrari-16-pour-enfants.jpg",
    },
    {
      name: " Matrix VELO",
      price: "500 dt",
      category: "MATRIX",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyzhKz0tMiKWuR38aWaSNuywquycrHu_CEGDk5sWRWGMNtwUIMjPM4udIh5KS1ah6k8U&usqp=CAU",
    },
    {
      name: "VVO",
      price: "500 dt",
      category: "VTT",
      imgSrc: "MATRIX",
    },
  ];

console.log(bikes)
var array=bikes.filter(function(element){

  return element.category=='ROCKRIDER'
})
console.log(array)
  