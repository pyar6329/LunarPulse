class CreateSeismometers < ActiveRecord::Migration
  def change
    create_table :seismometers, :force => true do |t|
      t.string :name
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
