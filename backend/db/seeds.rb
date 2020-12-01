# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Home.delete_all
Photo.delete_all
Reservation.delete_all
Transaction.delete_all


users = [
    {full_name: 'Kamala Harris', image: 'https://www.poynter.org/wp-content/uploads/2004/02/AP_20224740170220-2048x1366.jpg', is_owner: true, email: 'leVP@example.com', username: 'Ms.VP2020', password: '123'},
    {full_name: 'Haley Proctor', image: 'https://media-exp1.licdn.com/dms/image/C5603AQEiscRAwbsAOA/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=iS1UqANU8O4CwMxMkZzWTwoJZIeUeJLcw4NK9c2LNF8', is_owner: true, email: 'hproctor@example.com', username: 'HProctor', password: '123'},
    {full_name: 'Tiff Anderson', image: 'https://www.slrlounge.com/wp-content/uploads/2017/07/Slide19.jpg', is_owner: true, email: 'TT@example.com', username: 'T.Anderson', password: '123'},
    {full_name: 'Maria Jones', image: 'https://expertphotography.com/wp-content/uploads/2019/12/headshot-1.jpg', is_owner: true, email: 'maryJ@example.com', username: 'MaryJ', password: '123'},
    {full_name: 'Joseph Gonzalez', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60', is_owner: true, email: 'Jmoney@example.com', username: 'Jo.Go', password: '123'},
    {full_name: 'Mike Tyson', image: 'https://i.pinimg.com/originals/e4/22/18/e42218aca7b2ac42faeeae4de6322bc2.jpg', is_owner: true, email: 'TBMOTP@example.com', username: 'MikeThaison', password: '123'},
    {full_name: 'Elon Muskard', image: 'https://observer.com/wp-content/uploads/sites/2/2020/01/elon-musk-twitter-advice.jpg?resize=970,675', is_owner: false, email: 'EMusky@example.com', username: 'El.musk', password: '123'},
    {full_name: 'Mark Zuck', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MarkZuckerberg-crop.jpg/210px-MarkZuckerberg-crop.jpg', is_owner: false, email: 'MZuck@example.com', username: 'Your First Friend', password: '123'}
]

users.each {| user | User.create(user)}


homes = [
    {user_id: User.first.id, description: 'Beautiful, modern Austin home with unique touches, garden and rooftop patio to enjoy', location: 'Austin, TX', daily_price: 348.52, bedroom: 3, bathroom: 3, accommodates: 7,internet: true, central_air: true, heating: true, tv: true, pets_allowed: false},
    {user_id: User.second.id, description: 'Stunning, three story Harlem brownstone will make you want to extend your stay', location: 'New York City, NY', daily_price: 850.04, bedroom: 4, bathroom: 4, accommodates: 9,internet: true, central_air: true, heating: true, tv: true, pets_allowed: true},
    {user_id: User.third.id, description: 'Contemporary meets tradition in this San Miguel de Allende home with a view and skylight that will catch your attention', location: 'San Miguel de Allende, Mexico', daily_price: 322.17, bedroom: 2, bathroom: 3, accommodates: 6,internet: true, central_air: true, heating: true, tv: true, pets_allowed: false},
    {user_id: User.fourth.id, description: 'Serene home located in the heart of Medina, perfect for exploring the city like a local or taking a day trip to the Atlas Mountains', location: 'Marrakech, Moracco', daily_price:  142.27, bedroom: 2, bathroom: 2, accommodates: 5,internet: true, central_air: true, heating: true, tv: true, pets_allowed: false},
    {user_id: User.all[5].id, description: 'Feel like a Spanish landowner in this private getaway with beautiful views and space to match', location: 'Costa Blanca, Spain', daily_price: 215.86, bedroom: 6, bathroom: 4, accommodates: 10,internet: true, central_air: true, heating: true, tv: true, pets_allowed: true},
    {user_id: User.all[6].id, description: 'This apartment is the perfect meeting of tradition and modern, situated in the heart of Kyoto', location: 'Kyoto, Japan', daily_price: 238.93, bedroom: 2, bathroom: 1, accommodates: 3,internet: true, central_air: true, heating: true, tv: true, pets_allowed: false},
    {user_id: User.fourth.id, description: 'Tranquil, Sri Lankan home was made to adapt perfectly to its environment to create your very own paradise', location: 'Galle, Sri Lanka', daily_price: 275.05, bedroom: 2, bathroom: 2, accommodates: 4,internet: true, central_air: true, heating: true, tv: true, pets_allowed: true}
]

homes.each {| home | Home.create(home)}


photos = [
    {home_id: Home.first.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/02/holiday_home_austin_002-1.jpg', image_name: 'Stunning entrance and green space view'},
    {home_id: Home.first.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/02/holiday_home_austin_003.jpg', image_name: 'Quirky and clean rooftop patio'},
    {home_id: Home.first.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/02/holiday_home_austin_021.jpg', image_name: 'Giant windows flood the space with natural light'},
    {home_id: Home.first.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/02/holiday_home_austin_022.jpg', image_name: 'Modern dining area'},
    {home_id: Home.first.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/02/holiday_home_austin_023.jpg', image_name: 'Spacious kitchen with professional grade espresso machine'},
    {home_id: Home.first.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/02/holiday_home_austin_004.jpg', image_name: 'Main bedroom with ample storage space and views'},
    {home_id: Home.first.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/02/holiday_home_austin_019.jpg', image_name: 'Gorgeous tiled bathroom with a spacious jacuzzi tub'},

    {home_id: Home.second.id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/americas/united-states/harlem-brownstone-new-york-new-york/acation_home_for_rent_new_york_city_011.jpg', image_name: 'Brownstone front and outdoor space to enjoy'},
    {home_id: Home.second.id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/americas/united-states/harlem-brownstone-new-york-new-york/acation_home_for_rent_new_york_city_002.jpg', image_name: 'Rooftop patio space, the perfect place to start your day'},
    {home_id: Home.second.id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/americas/united-states/harlem-brownstone-new-york-new-york/acation_home_for_rent_new_york_city_019.jpg', image_name: 'Giant windows facing the back yard give a sneak preview into this beautiful, three-story home'},
    {home_id: Home.second.id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/americas/united-states/harlem-brownstone-new-york-new-york/acation_home_for_rent_new_york_city_022-1.jpg', image_name: 'This third floor study is perfect for getting work done during your stay'},
    {home_id: Home.second.id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/americas/united-states/harlem-brownstone-new-york-new-york/acation_home_for_rent_new_york_city_021.jpg', image_name: 'The second floor kitchen and dining space has an open layout with beautiful appliances and island'},

    {home_id: Home.third.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/01/vacation_home_rental_san_miguel_de_allende_033.jpg', image_name: 'Amazing view from this rooftop patio, including firepit, grill, glass-bottom pool and washer/ dryer'},
    {home_id: Home.third.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/01/vacation_home_rental_san_miguel_de_allende_035.jpg', image_name: 'Cozy livingroom with fireplace and blue hued skylight that sees through the pool above'},
    {home_id: Home.third.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/01/vacation_home_rental_san_miguel_de_allende_005.jpg', image_name: 'Natural wood and black granite kitchen pairs perfectly with stainless steel appliances'},
    {home_id: Home.third.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/01/vacation_home_rental_san_miguel_de_allende_027.jpg', image_name: 'Modern meets nature in this main bedroom'},
    {home_id: Home.third.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/01/vacation_home_rental_san_miguel_de_allende_007.jpg', image_name: 'Perfect bathroom to match with a giant stone tub and shower'},
    {home_id: Home.third.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2020/01/vacation_home_rental_san_miguel_de_allende_016.jpg', image_name: 'Big, comfy couch to cuddle up and relax on after exploring the city'},
    
    {home_id: Home.fourth.id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/africa/morocco/medina-riad-marrakech-morocco/vacation_home_for_rent_marrakesh_002-1.jpg', image_name: 'Lounge in the open, interior courtyard'},
    {home_id: Home.fourth.id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/africa/morocco/medina-riad-marrakech-morocco/vacation_home_for_rent_marrakesh_035.jpg', image_name: 'Or the rooftop terrace, if you prefer'},
    {home_id: Home.fourth.id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/africa/morocco/medina-riad-marrakech-morocco/vacation_home_for_rent_marrakesh_037.jpg', image_name: 'Bright, cozy living room offers plenty of seating and fireplace- situated next to the dinning area '},
    {home_id: Home.fourth.id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/africa/morocco/azbezt-riad-marrakech-morocco/vacation_home_for_rent_marrakesh_019-1.jpg', image_name: 'Beautiful, modern main bedroom is the perfect place to start and end your day'},
    {home_id: Home.fourth.id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/africa/morocco/azbezt-riad-marrakech-morocco/vacation_home_for_rent_marrakesh_021.jpg', image_name: 'Breathtaking, stone, wood and ceramic bethroom with gold accents'},

    {home_id: Home.fifth.id, image: 'https://www.boutique-homes.com/wp-content/uploads/540e06eec5ca2-modern_vacation_rentals_costa_blanca_spain_014.jpg', image_name: 'Terraced landscape comliments this beautiful, contemporary villa'},
    {home_id: Home.fifth.id, image: 'https://www.boutique-homes.com/wp-content/uploads/540e06b154b15-modern_vacation_rentals_costa_blanca_spain_001.jpg', image_name: 'Plenty of sunbathing and swimming space at this villa'},
    {home_id: Home.fifth.id, image: 'https://www.boutique-homes.com/wp-content/uploads/2013/04/modern_vacation_rentals_costa_blanca_spain_001-1.jpg', image_name: 'Outdoor dining and lounge space'},
    {home_id: Home.fifth.id, image: 'https://www.boutique-homes.com/wp-content/uploads/540e0763cfb7c-modern_vacation_rentals_costa_blanca_spain_017.jpg', image_name: 'Modern, spacious kitchen perfect for entertaining a large family and guests'},
    {home_id: Home.fifth.id, image: 'https://www.boutique-homes.com/wp-content/uploads/540e079cba8fc-modern_vacation_rentals_costa_blanca_spain_031.jpg', image_name: 'All bedrooms have balcony access'},
    {home_id: Home.fifth.id, image: 'https://www.boutique-homes.com/wp-content/uploads/540e07b15157b-modern_vacation_rentals_costa_blanca_spain_037.jpg', image_name: 'Sleek, modern bathroom with giant tub will not disappoint'},
    
    {home_id: Home.all[5].id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/asia/japan/kura298-kyoto-japan/vacation_home_rental_kyoto_002.jpg', image_name: 'Private entrance leads you through a natural courtyard'},
    {home_id: Home.all[5].id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/asia/japan/kura298-kyoto-japan/vacation_home_rental_kyoto_001.jpg', image_name: 'The minimalistic design feels clean and modern- not to mention, less distracing to get work done in this study space'},
    {home_id: Home.all[5].id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/asia/japan/kura298-kyoto-japan/vacation_home_rental_kyoto_05.jpg', image_name: 'Take a night to stay in for an intimate dinner'},
    {home_id: Home.all[5].id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/asia/japan/kura298-kyoto-japan/vacation_home_rental_kyoto_007.jpg', image_name: 'Cozy, lofted bedroom'},
    {home_id: Home.all[5].id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/asia/japan/kura298-kyoto-japan/vacation_home_rental_kyoto_020.jpg', image_name: 'Additional mattress available to accommodate for more guests'},

    {home_id: Home.all[6].id, image: 'https://www.boutique-homes.com/wp-content/uploads/2015/10/holiday_homes_sri_lanka_051.jpg', image_name: 'There is more than meets the eye at this beautiful, oasis home'},
    {home_id: Home.all[6].id, image: 'https://www.boutique-homes.com/wp-content/uploads/2015/10/holiday_homes_sri_lanka_034.jpg', image_name: 'Serene views from the rooftop terrace'},
    {home_id: Home.all[6].id, image: 'https://www.boutique-homes.com/wp-content/uploads/2015/10/holiday_homes_sri_lanka_048.jpg', image_name: 'This outdoor dining area is the perfect space to start and end your day'},
    {home_id: Home.all[6].id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/asia/sri-lanka/kanda-house-galle-sri-lanka/modern_vacation_rentals_galles_sri_lanka_016.jpg', image_name: "Take a dip in one of the rental's two inifiti pools"},
    {home_id: Home.all[6].id, image: 'https://www.boutique-homes.com/wp-content/uploads/2015/10/holiday_homes_sri_lanka_062.jpg', image_name: 'Not a bath person? This tub may change your mind'},
    {home_id: Home.all[6].id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/asia/sri-lanka/kanda-house-galle-sri-lanka/holiday_homes_sri_lanka_022.jpg', image_name: "We can't get enough of this tub..."},
    {home_id: Home.all[6].id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/asia/sri-lanka/kanda-house-galle-sri-lanka/holiday_homes_sri_lanka_019.jpg', image_name: 'Open concept kitchen, dining room and living room space'},
    {home_id: Home.all[6].id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/asia/sri-lanka/kanda-house-galle-sri-lanka/holiday_homes_sri_lanka_005.jpg', image_name: 'Clean and simple main bedroom flooded with natural light'},
    {home_id: Home.all[6].id, image: 'https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/asia/sri-lanka/kanda-house-galle-sri-lanka/holiday_homes_sri_lanka_020.jpg', image_name: 'Shower room with exterior glass doors leading to the serene bath tub'},
    {home_id: Home.all[6].id, image: 'https://www.boutique-homes.com/wp-content/uploads/2015/10/holiday_homes_sri_lanka_059.jpg', image_name: 'Second story bedroom with balcony access'}
]

photos.each {| photo | Photo.create(photo)}


# reservations = [
   
# ]

# reservations.each {| resi | Reservation.create(resi)}


# transactions = [

# ]

# transactions.each {| transaction | Transaction.create{transaction}}
