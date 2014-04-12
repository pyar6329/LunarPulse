# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require "csv"

reader = CSV.open('db/data/moon_quake.csv', 'r')
reader.shift
reader.each do |row|
  MoonQuake.create(:id => row[0], :quake_category_id => row[1], :seismometer_id => row[2], :lat => row[3], :lng => row[4])
end

reader = CSV.foreach('db/data/seismometer.csv')
reader.shift
reader.each do |row|
  Seismometer.create(:id => row[0], :name => row[1], :lat => row[2], :lng => row[3])
end

reader = CSV.foreach('db/data/quake_category.csv')
reader.shift
reader.each do |row|
  AuakeCategory.create(:id => row[0], :name => row[1], :color => row[2])
end

reader = CSV.foreach('db/data/amplitudes.csv')
reader.shift
reader.each do |row|
  Amplitudes.create(:id => row[0], :amplitude => row[1], :time => row[2], :moon_quake_id => row[3])
end