const movies = [
  {
    name: 'Rurouni Kenshin: Trust and Betrayal (1999)',
    imageUrl:
      'https://i.pinimg.com/736x/fb/86/60/fb8660b5c558c99f4ab5f354b6845bca.jpg',
    description:
      "In the era of Japan's Meiji Restoration, an assassin regains his humanity.",
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Spirited Away (2001)',
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.6WtlDwydOpte7CvxJyX0RwHaK-&pid=Api',
    description:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Princess Mononoke (1997)',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.gl-X91HlPK5-5sgNKmoYaQHaLH&pid=Api',
    description:
      "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Ghost in the Shell (1995)',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.P0KniNWYnALYaWQvW9M3NgHaK-&pid=Api',
    description:
      'A cyborg policewoman and her partner hunt a mysterious and powerful hacker called the Puppet Master.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Wolf Children (2012)',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.oSR5gMvlNaCA_EOnxIQeJgAAAA&pid=Api',
    description:
      'After her werewolf lover unexpectedly dies in an accident while hunting for food for their children, a young woman must find ways to raise the werewolf son and daughter that she had with him while keeping their trait hidden from society.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'The Tale of the Princess Kaguya (2013)',
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.wP-wyyOJt_6A3gGW53IA8QHaLH&pid=Api',
    description:
      'Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her, but ultimately she must confront her fate, the punishment for her crime.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'The Wind Rises (2013)',
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.ea5JoMff-wo092-jFWXSegHaK-&pid=Api',
    description:
      'A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: "Howl's Moving Castle (2004)",
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.FEWe9K93tAYVtX0Pgcj1lAHaLH&pid=Api',
    description:
      'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Cowboy Bebop: The Movie (2001)',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.G0Wd-W6ppiPabGgv3wpJngHaLH&pid=Api',
    description:
      "A terrorist explosion releases a deadly virus on the masses, and it's up the bounty-hunting Bebop crew to catch the cold-blooded culprit.",
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Mind Game (2004)',
    imageUrl:
      'http://www.cartoonbrew.com/wp-content/uploads/2015/08/mindgame_netflix_poster.jpg',
    description:
      'After a deadly encounter with two yakuza, a loser with a crush on his childhood girlfriend goes to heaven and back, embarking on a psychedelic self-discovery experience with her and his friends.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Nausicaa of the Valley of the Wind (1984)',
    imageUrl: 'https://i.redd.it/7bajas5fbsez.jpg',
    description:
      'Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: '5 Centimeters per Second (2007)',
    imageUrl:
      'http://res.cloudinary.com/alkendy-net/image/upload/v1500648524/A.Poster/5_Centimeters_Per_Second_Poster.jpg',
    description:
      'Told in three interconnected segments, we follow a young man named Takaki through his life as cruel winters, cold technology, and finally, adult obligations and responsibility converge to test the delicate petals of love.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Redline (2009)',
    imageUrl:
      'https://i.pinimg.com/originals/c9/df/9b/c9df9b0faabd28823f05625aa989a92e.jpg',
    description:
      'A story about the most popular racing event in the galaxy, the Redline, and the various racers who compete in it.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'The Boy and the Beast (2015)',
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.mTeibZeeQje60f-Kb1sHQQHaKn&pid=Api',
    description:
      "When a young orphaned boy living on the streets of Shibuya stumbles upon a fantastic world of beasts, he's taken in by a gruff warrior beast looking for an apprentice.",
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Castle in the Sky (1986)',
    imageUrl:
      'https://tse1.explicit.bing.net/th?id=OIP.CshrnfFU1VM81JPlExATEgHaLH&pid=Api',
    description:
      'A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Neon Genisis Evangelion: The End of Evangelion (1997)',
    imageUrl:
      'http://ultimatodobacon.com/wp-content/uploads/2019/06/The-End-of-Evangelion-Poster-686x1024.jpg',
    description:
      'Concurrent theatrical ending of the TV series Neon Genesis Evangelion (1995).',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Grave of the Fireflies (1988)',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.NQNFPygvvbu4tG3_3XgjlQHaLH&pid=Api',
    description:
      'A young boy and his little sister struggle to survive in Japan during World War II.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Perfect Blue (1997)',
    imageUrl:
      'https://image.tmdb.org/t/p/original/i0vO6X24oNG3YJS8a26AmzaluFO.jpg',
    description:
      'A pop singer gives up her career to become an actress, but she slowly goes insane when she starts being stalked by an obsessed fan and what seems to be a ghost of her past.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'The Girl Who Leapt Through Time (2006)',
    imageUrl:
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fS41b13LZEtL9VYUlMobXZqvk41.jpg',
    description:
      'A high-school girl named Makoto acquires the power to travel back in time, and decides to use it for her own personal benefits. Little does she know that she is affecting the lives of others just as much as she is her own.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Sword of the Stranger (2007)',
    imageUrl:
      'https://image.tmdb.org/t/p/original/rFrC6MT8Zelq7YkkN2faDKzlJeO.jpg',
    description:
      'A swordsman from a strange land is caught in a struggle between morality, righteousness, and devotion as he reluctantly agrees to take a raggedy boy and his dog to a remote, Buddhist temple.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'Summer Wars (2009)',
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.lNOHxqAOKTzZgpYvM6uh-AHaLH&pid=Api',
    description:
      "A student tries to fix a problem he accidentally caused in OZ, a digital world, while pretending to be the fiancé of his friend at her grandmother's 90th birthday.",
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'When Marnie Was There (2014)',
    imageUrl:
      'http://cdn.traileraddict.com/content/studio-ghibli/when-marnie-was-there.jpg',
    description:
      "Due to 12 y.o. Anna's asthma, she's sent to stay with relatives of her guardian in the Japanese countryside. She likes to be alone, sketching. She befriends Marnie. Who is the mysterious, blonde Marnie.",
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'My Neighbor Totoro (1988)',
    imageUrl:
      'https://i.pinimg.com/originals/96/ea/80/96ea805ed8ba6b4417f45eb86f3fa9c8.jpg',
    description:
      'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.',
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'The Disappearance of Haruhi Suzumiya (2010)',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.YHz_E-rBJSisqAFr4JNIpAHaJ4&pid=Api',
    description:
      "On Dec.16, 5 friends in SOS Brigade (high school club) plan an Xmas party. On Dec.18, Haruhi +1 are missing and Kyon's 2 other friends don't know about the club.",
    genre: 'Anime',
    price: 0.99,
  },
  {
    name: 'The Anthem of the Heart (2015)',
    imageUrl:
      'https://res.cloudinary.com/alkendy-net/image/upload/e_sharpen:100,f_auto,q_auto:eco/v1556924354/A.Poster/Anthem_of_Tthe_Heart_Poster.jpg',
    description:
      'A young girl had her voice magically taken away so that she would never hurt people with it, but her outlook changes when she encounters music and friendship.',
    genre: 'Anime',
    price: 0.99,
  },
];

const users = [
  {
    userName: 'Roger Ebert',
    password: 'Roger_pw',
    email: 'moviebuff@email.com',
    isAdmin: false,
  },
  {
    userName: 'Gene Shalit',
    password: 'Gene_pw',
    email: 'mustache@todayshow.com',
    isAdmin: false,
  },
  {
    userName: 'Paul Scheer',
    password: 'Paul_pw',
    email: 'tallJohnSheer@hdtgm.com',
    isAdmin: false,
  },
  {
    userName: 'Karina Longworth',
    password: 'Karina_pw',
    email: 'karina@youmustrememberthis.com',
    isAdmin: false,
  },
  {
    userName: 'Jamie Loftus',
    password: 'Jamie_pw',
    email: 'jamie@bechdelcastpodcast.com',
    isAdmin: false,
  },
  {
    userName: 'Admin1',
    password: 'Admin1_pw',
    email: 'admin1@moviestore.com',
    isAdmin: true,
  },
  {
    userName: 'Admin2',
    password: 'Admin2_pw',
    email: 'admin2@moviestore.com',
    isAdmin: true,
  },
];

const movieCarts = [
  {
    quantity: 4,
    cartId: 1,
    movieId: 1,
  },
  {
    quantity: 9,
    cartId: 2,
    movieId: 2,
  },
  {
    quantity: 1,
    cartId: 3,
    movieId: 1,
  },
  {
    quantity: 2,
    cartId: 4,
    movieId: 4,
  },
];

const carts = [
  {
    movieCount: 4,
    totalPrice: 3.96,
    shippingPrice: 5.99,
    address: '123 Main St. USA',
    status: 'Placed',
  },
  {
    movieCount: 9,
    totalPrice: 8.91,
    shippingPrice: 5.99,
    address: 'Sesame Street',
    status: 'Open',
  },
  {
    movieCount: 0,
    totalPrice: 0,
    shippingPrice: 0,
    address: '456 Somewhere Lane, New York, New York',
    status: 'Open',
  },
  {
    movieCount: 2,
    totalPrice: 1.98,
    shippingPrice: 5.99,
    address: '123 Main St. USA',
    status: 'Open',
  },
];

module.exports = {
  movies,
  users,
  carts,
  movieCarts,
};
