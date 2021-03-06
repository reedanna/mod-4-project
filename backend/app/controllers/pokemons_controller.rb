class PokemonsController < ApplicationController

    def index
        pokemon = Pokemon.all.order('id asc')

        render json: pokemon.to_json(include: :types)
    end

    def show
        pokemon = Pokemon.find(params[:id])

        render json: pokemon.to_json(include: :types)
    end
end
