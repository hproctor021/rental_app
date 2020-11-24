class CreateApiV1Auths < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_auths do |t|

      t.timestamps
    end
  end
end
