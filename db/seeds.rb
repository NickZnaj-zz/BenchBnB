# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.destroy_all
bench1 = Bench.create!(description: "Sit on it", lat: 40.723008, lng: -74.0006327 )
oldSpot = Bench.create!(description: "Sitting, coffee, smokes", lat: 40.730602, lng: -73.996343 )
chrystie = Bench.create!(description: "Sitting, coffee, dumplings", lat: 40.717211, lng: -73.994111 )
carlSchurz = Bench.create!(description: "Sitting, coffee, ruminating", lat: 40.775558, lng: -73.942593 )

# 40.725151, -73.996914
