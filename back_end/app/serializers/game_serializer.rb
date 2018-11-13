class GameSerializer < ActiveModel::Serializer
  attributes :id, :seconds_left, :card_pairs_left, :user_id, :baby_id, :name
  belongs_to :user
  belongs_to :baby
end
