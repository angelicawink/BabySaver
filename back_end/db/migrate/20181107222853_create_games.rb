class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :seconds_left
      t.integer :card_pairs_left
      t.integer :user_id
      t.integer :baby_id
      t.timestamps
    end
  end
end
