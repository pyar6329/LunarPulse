class CreateAmplitudes < ActiveRecord::Migration
  def change
    create_table :amplitudes, :force => true do |t|
#      t.integer :id
      t.float :amplitudes
      t.datetime :time
      t.integer :moon_quake_id

      t.timestamps
    end
  end
end
