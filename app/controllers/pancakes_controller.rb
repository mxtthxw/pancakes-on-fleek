class PancakesController < ApplicationController
  before_action :set_pancake, only: [:show, :edit, :update, :destroy]

  # GET /pancakes
  # GET /pancakes.json
  def index
    @pancakes = Pancake.all
  end

  # GET /pancakes/1
  # GET /pancakes/1.json
  def show
  end

  # GET /pancakes/new
  def new
    @pancake = Pancake.new
  end

  # GET /pancakes/1/edit
  def edit
  end

  # POST /pancakes
  # POST /pancakes.json
  def create
    @pancake = Pancake.new(pancake_params)

    respond_to do |format|
      if @pancake.save
        format.html { redirect_to @pancake, notice: 'Pancake was successfully created.' }
        format.json { render :show, status: :created, location: @pancake }
      else
        format.html { render :new }
        format.json { render json: @pancake.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pancakes/1
  # PATCH/PUT /pancakes/1.json
  def update
    respond_to do |format|
      if @pancake.update(pancake_params)
        format.html { redirect_to @pancake, notice: 'Pancake was successfully updated.' }
        format.json { render :show, status: :ok, location: @pancake }
      else
        format.html { render :edit }
        format.json { render json: @pancake.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pancakes/1
  # DELETE /pancakes/1.json
  def destroy
    @pancake.destroy
    respond_to do |format|
      format.html { redirect_to pancakes_url, notice: 'Pancake was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pancake
      @pancake = Pancake.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pancake_params
      params.require(:pancake).permit(:name, :description, :price, :stock, :image)
    end
end
