# # # This file should contain all the record creation needed to seed the database with its default values.
# # # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# # #
# # # Examples:
# # #
# # #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# # #   Character.create(name: 'Luke', movie: movies.first)
# #
User.create(name: "carowink")
User.create(name: "ange91")

Baby.create(name: "Bruno", img_url: "http://www.stickpng.com/assets/images/584c66ce6e7d5809d2fa6354.png", onShelf: false)
Baby.create(name: "Ann", img_url: "https://mbtskoudsalg.com/images/baby-cartoon-png.png", onShelf: false)
Baby.create(name: "Sam", img_url: "https://clinicasastre.es/wp-content/uploads/2017/07/baby-drinking-icon.png", onShelf: false)
Baby.create(name: "Erin", img_url: "https://i.pinimg.com/originals/f1/cc/e9/f1cce9968bad030dbff4d36743eb992c.png", onShelf: false)
Baby.create(name: "Charlie", img_url: "http://www.stickpng.com/assets/images/584c66d56e7d5809d2fa6355.png", onShelf: false)
Baby.create(name: "Peter", img_url: "http://cliparts.co/cliparts/pi5/8yp/pi58ypdKT.png", onShelf: false)
Baby.create(name: "Ricky", img_url: "https://ubisafe.org/images/babied-clipart-animated-5.png", onShelf: false)
Baby.create(name: "Angelica", img_url: "https://cdn.pixabay.com/photo/2014/04/03/11/08/baby-311829_640.png", onShelf: false)
Baby.create(name: "Sasha", img_url: "https://png2.kisspng.com/20180217/hce/kisspng-cartoon-infant-drawing-clip-art-cute-cartoon-baby-baby-5a8903ec64e896.7206837915189288764133.png", onShelf: false)
Baby.create(name: "Juliette", img_url: "http://www.freelogovectors.net/wp-content/uploads/2018/03/baby-cartoon-characters003.png", onShelf: false)

Game.create(seconds_left: 25, card_pairs_left: 8, user_id: 1, baby_id: 1, name: "DOMINATION")
Game.create(seconds_left: 36, card_pairs_left: 8, user_id: 1, baby_id: 2, name: "Know UR Worth")
Game.create(seconds_left: 42, card_pairs_left: 8, user_id: 1, baby_id: 3, name: "Listen UPPP")

Game.create(seconds_left: 50, card_pairs_left: 8, user_id: 2, baby_id: 4, name: "Touchem Up")
Game.create(seconds_left: 40, card_pairs_left: 8, user_id: 2, baby_id: 5, name: "Snifff IT Nice")
Game.create(seconds_left: 20, card_pairs_left: 8, user_id: 2, baby_id: 6, name: "Ya suck, MOM")
