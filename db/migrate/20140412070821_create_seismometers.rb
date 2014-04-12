class CreateSeismometers < ActiveRecord::Migration
  def change
    create_table :seismometers do |t|
#      t.integer :id
      t.string :name
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
