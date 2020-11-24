class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :home_id
      t.datetime :start_date
      t.datetime :end_date
      t.float :total_price
      t.boolean :approved

      t.timestamps
    end
  end
end
