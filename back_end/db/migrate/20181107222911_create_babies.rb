class CreateBabies < ActiveRecord::Migration[5.2]
  def change
    create_table :babies do |t|
      t.string :name
      t.string :img_url
      t.boolean :onShelf
      t.timestamps
    end
  end
end
