class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.integer :home_id
      t.string :image
      t.string :image_name

      t.timestamps
    end
  end
end
