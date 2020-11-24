class CreateHomes < ActiveRecord::Migration[6.0]
  def change
    create_table :homes do |t|
      t.integer :user_id
      t.text :description
      t.string :location
      t.float :daily_price
      t.integer :bedroom
      t.integer :bathroom
      t.integer :accommodates
      t.boolean :internet
      t.boolean :central_air
      t.boolean :heating
      t.boolean :tv
      t.boolean :pets_allowed

      t.timestamps
    end
  end
end
