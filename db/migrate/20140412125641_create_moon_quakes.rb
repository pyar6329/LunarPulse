class CreateMoonQuakes < ActiveRecord::Migration
  def change
    create_table :moon_quakes, :force => true do |t|
      t.integer :quake_category_id
      t.integer :seismometer_id
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
