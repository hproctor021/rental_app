class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.integer :user_id
      t.integer :reservation_id
      t.string :payment_info

      t.timestamps
    end
  end
end
