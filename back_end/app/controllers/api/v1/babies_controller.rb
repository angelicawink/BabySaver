class Api::V1::BabiesController < ApplicationController
  before_action :find_baby, only: [:show, :update]

  def index
    @babys = Baby.all
    render json: @babys
  end

  def show
    render json: @baby
  end

  def create
    render json: Baby.create(baby_params)
  end

  def update
    if @baby.save
      @baby.update(baby_params)
    else
      render json: { errors: @baby.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def baby_params
    params.require(:baby).permit(:name, :img_url)
  end

  def find_baby
    @baby = Baby.find(params[:id])
  end

end
