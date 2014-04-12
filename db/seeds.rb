# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require "csv"

reader = CSV.open('db/data/moon_quake.csv')
puts(reader.shift)
reader.each do |row|
  MoonQuake.create(:quake_category_id => row[1], :seismometer_id => row[2], :lat => row[3], :lng => row[4])
end

puts('test1')
reader = CSV.open('db/data/seismometer.csv')
puts(reader.shift)
reader.each do |row|
  Seismometer.create(:name => row[1], :lat => row[2], :lng => row[3])
end

puts('test2')
reader = CSV.open('db/data/quake_category.csv')
puts(reader.shift)
reader.each do |row|
  QuakeCategory.create(:name => row[1], :color => row[2])
end

puts('test3')
reader = CSV.open('db/data/amplitudes.csv')
puts(reader.shift)
reader.each do |row|
  Amplitudes.create(:apmlitude => row[1], :time => row[2], :moon_quake_id => row[3])
end