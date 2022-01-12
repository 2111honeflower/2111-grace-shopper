

const movies = [
  {
    name: "Rurouni Kenshin: Trust and Betrayal (1999)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BM2FiOWE5MjctNWMxMC00ZTE5LWFmMGMtNzVlZjRhZDMzNTFmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY98_CR1,0,67,98_AL_.jpg",
    description: "In the era of Japan's Meiji Restoration, an assassin regains his humanity.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Spirited Away (2001)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Princess Mononoke (1997)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX140_CR0,0,140,209_AL_.jpg",
    description: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Ghost in the Shell (1995)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYWRiYjQyOGItNzQ1Mi00MGI1LWE3NjItNTg1ZDQwNjUwNDM2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
    description: "A cyborg policewoman and her partner hunt a mysterious and powerful hacker called the Puppet Master.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Wolf Children (2012)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYzQxNDZhNDUtNDUwOC00NjQyLTg2OWUtZWVlYThjYjYyMTc2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR4,0,140,209_AL_.jpg",
    description: "After her werewolf lover unexpectedly dies in an accident while hunting for food for their children, a young woman must find ways to raise the werewolf son and daughter that she had with him while keeping their trait hidden from society.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "The Tale of the Princess Kaguya (2013)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNThmMWMyMWMtOWRiNy00MGY0LTg1OTUtNjYzODg2MjdlZGU5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR4,0,140,209_AL_.jpg",
    description: "Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her, but ultimately she must confront her fate, the punishment for her crime.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "The Wind Rises (2013)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_UY209_CR0,0,140,209_AL_.jpg",
    description: "A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Howl's Moving Castle (2004)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX140_CR0,0,140,209_AL_.jpg",
    description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Cowboy Bebop: The Movie (2001)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjYzYWM4YTItZjJiMC00OTM5LTg3NDgtOGQ2Njk2ZWNhN2QwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY209_CR3,0,140,209_AL_.jpg",
    description: "A terrorist explosion releases a deadly virus on the masses, and it's up the bounty-hunting Bebop crew to catch the cold-blooded culprit.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Mind Game (2004)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzFlMDI1ZjctMzgzYy00YmVkLTlmMTMtNDZmZmVmMzk3MzNhXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_UY209_CR10,0,140,209_AL_.jpg",
    description: "After a deadly encounter with two yakuza, a loser with a crush on his childhood girlfriend goes to heaven and back, embarking on a psychedelic self-discovery experience with her and his friends.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Nausicaa of the Valley of the Wind (1984)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZTI3NmJmYTQtNDg4NS00M2VlLTgzZDAtZWIwZDcyOWY5YzIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX140_CR0,0,140,209_AL_.jpg",
    description: "Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "5 Centimeters per Second (2007)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BODJhZDU1MDYtMDQ0NS00N2JmLWI2ZDAtMGNmN2RmNWJhNzQ5L2ltYWdlXkEyXkFqcGdeQXVyNjY1OTY4MTk@._V1_UY209_CR4,0,140,209_AL_.jpg",
    description: "Told in three interconnected segments, we follow a young man named Takaki through his life as cruel winters, cold technology, and finally, adult obligations and responsibility converge to test the delicate petals of love.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Redline (2009)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGYxYzI5ODQtY2JmYy00ZjFjLTg5MjgtMjI3Njg5ODEwNmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR4,0,140,209_AL_.jpg",
    description: "A story about the most popular racing event in the galaxy, the Redline, and the various racers who compete in it.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "The Boy and the Beast (2015)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZGUxZGMzYTYtNjJlMS00OGQ5LTg5YjItN2JjM2Y2NjQzMzdkL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR4,0,140,209_AL_.jpg",
    description: "When a young orphaned boy living on the streets of Shibuya stumbles upon a fantastic world of beasts, he's taken in by a gruff warrior beast looking for an apprentice.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Castle in the Sky (1986)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNTg0NmI1ZGQtZTUxNC00NTgxLThjMDUtZmRlYmEzM2MwOWYwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY209_CR3,0,140,209_AL_.jpg",
    description: "A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Neon Genisis Evangelion: The End of Evangelion (1997)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDAxYzU2YjEtNmNjNS00OGJlLTg3MzgtNzAwN2E1ZWFiYTg5XkEyXkFqcGdeQXVyNTkwNzYyODM@._V1_UY209_CR4,0,140,209_AL_.jpg",
    description: "Concurrent theatrical ending of the TV series Neon Genesis Evangelion (1995).",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Grave of the Fireflies (1988)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX140_CR0,0,140,209_AL_.jpg",
    description: "A young boy and his little sister struggle to survive in Japan during World War II.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Perfect Blue (1997)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMmMzOWNhNTYtYmY0My00OGJiLWIzNDUtZWRhNGY0NWFjNzFmXkEyXkFqcGdeQXVyNjUxMDQ0MTg@._V1_UY209_CR0,0,140,209_AL_.jpg",
    description: "A pop singer gives up her career to become an actress, but she slowly goes insane when she starts being stalked by an obsessed fan and what seems to be a ghost of her past.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "The Girl Who Leapt Through Time (2006)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzUxODI4MzgtNWZiOC00MmNlLWIyMzctNGE3ZGU0MzczMjk4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR4,0,140,209_AL_.jpg",
    description: "A high-school girl named Makoto acquires the power to travel back in time, and decides to use it for her own personal benefits. Little does she know that she is affecting the lives of others just as much as she is her own.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Sword of the Stranger (2007)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNWI5MzQ3M2QtNGY5My00YjQ2LTgxZTQtMDgyYmZhMmFkNDZmXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY209_CR5,0,140,209_AL_.jpg",
    description: "A swordsman from a strange land is caught in a struggle between morality, righteousness, and devotion as he reluctantly agrees to take a raggedy boy and his dog to a remote, Buddhist temple.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "Summer Wars (2009)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNDUzMzVmZGEtNjE4Ny00NmZkLThiMWEtNjJjY2Y3MzlkYzg1XkEyXkFqcGdeQXVyNjYyMTYxMzk@._V1_UY209_CR4,0,140,209_AL_.jpg",
    description: "A student tries to fix a problem he accidentally caused in OZ, a digital world, while pretending to be the fiancé of his friend at her grandmother's 90th birthday.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "When Marnie Was There (2014)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZTlmYTJmMWEtNDRhNy00ODc1LTg2OTMtMjk2ODJhNTA4YTE1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR1,0,140,209_AL_.jpg",
    description: "Due to 12 y.o. Anna's asthma, she's sent to stay with relatives of her guardian in the Japanese countryside. She likes to be alone, sketching. She befriends Marnie. Who is the mysterious, blonde Marnie.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "My Neighbor Totoro (1988)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR4,0,140,209_AL_.jpg",
    description: "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "The Disappearance of Haruhi Suzumiya (2010)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BM2IxOGFkYzYtNzE5OS00Zjg3LWE5YmUtMDE5MWMwZWVlNWMxXkEyXkFqcGdeQXVyMjI2MDQxODA@._V1_UY209_CR4,0,140,209_AL_.jpg",
    description: "On Dec.16, 5 friends in SOS Brigade (high school club) plan an Xmas party. On Dec.18, Haruhi +1 are missing and Kyon's 2 other friends don't know about the club.",
    genre: "Anime",
    price: 0.99,
  },
  {
    name: "The Anthem of the Heart (2015)",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZjE3MGYyM2QtMzgzZS00OGQ5LWE2MjAtMWEyMDk5YzhhZWU0XkEyXkFqcGdeQXVyNjU1ODkwMjU@._V1_UY209_CR4,0,140,209_AL_.jpg",
    description: "A young girl had her voice magically taken away so that she would never hurt people with it, but her outlook changes when she encounters music and friendship.",
    genre: "Anime",
    price: 0.99,
  }
]

const users = [
  {
    userName: "Roger Ebert",
    password: "Roger_pw",
    email: "moviebuff@email.com",
    isAdmin: false
  },
  {
    userName: "Gene Shalit",
    password: "Gene_pw",
    email: "mustache@todayshow.com",
    isAdmin: false
  },
  {
    userName: "Paul Scheer",
    password: "Paul_pw",
    email: "tallJohnSheer@hdtgm.com",
    isAdmin: false
  },
  {
    userName: "Karina Longworth",
    password: "Karina_pw",
    email: "karina@youmustrememberthis.com",
    isAdmin: false
  },
  {
    userName: "Jamie Loftus",
    password: "Jamie_pw",
    email: "jamie@bechdelcastpodcast.com",
    isAdmin: false
  },
  {
    userName: "Admin1",
    password: "Admin1_pw",
    email: "admin1@moviestore.com",
    isAdmin: true
  },
  {
    userName: "Admin2",
    password: "Admin2_pw",
    email: "admin2@moviestore.com",
    isAdmin: true
  }
]

module.exports = {
  movies,
  users
}
