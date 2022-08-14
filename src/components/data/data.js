function importAll(r) {
  let images = {};
  r.keys().map(item => (images[item.replace('./', '')] = r(item)));
  return images;
}

const images = importAll(require.context('img', false, /\.(png|jpe?g|svg)$/));

const data = [
  {
    id: 1,
    title: 'Light, Fast & Powerful',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    img: images['img1.png'],
    width: '480',
  },
  {
    id: 2,
    title: 'Light, Fast & Powerful',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    img: images['img2.png'],
    width: '540',
  },
  {
    id: 3,
    title: 'Light, Fast & Powerful',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    img: images['img3.png'],
    width: '445',
  },
];

export default data;
