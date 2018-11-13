class Api::V1::GamesController < ApplicationController
    before_action :find_game, only: [:show, :update]

  def index
    @games = Game.all
    render json: @games
  end

  def show
    render json: @game
  end

  def create
    render json: Game.create(game_params)
  end

  def update
    if @game.save
      @game.update(game_params)
    else
      render json: { errors: @game.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def game_params
    params.require(:game).permit(:seconds_left, :card_pairs_left, :user_id, :baby_id, :name)
  end

  def find_game
    @game = Game.find(params[:id])
  end

end
