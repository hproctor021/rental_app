class HomesController < ApplicationController

    def index
        @homes = Home.all
        render json: @homes
    end

    def create
        @home = Home.create(home_params)
        render json: @home
    end

    private

    def home_params
        params.require(:home).permit(:location, :daily_price, :bedroom, :bathroom, :internet, :central_air, :heating, :tv, :pets_allowed)
    end

end
