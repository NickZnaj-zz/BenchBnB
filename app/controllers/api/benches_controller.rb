class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    # @benches = Bench.all
    render :index

  end

  def new
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :index
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  private
  def bench_params
    params.require(:bench).permit(
    :lat, :lng, :description
    )
  end
end
