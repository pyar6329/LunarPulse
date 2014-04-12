class CreateMoonQuakes < ActiveRecord::Migration
  def change
    create_table :moon_quakes do |t|
#      t.integer :id
      t.integer :quake_category_id
      t.integer :seismometer
      t.float :lat
      t.float :lon

      t.timestamps
    end
  end
end
