class CreatePancakes < ActiveRecord::Migration
  def change
    create_table :pancakes do |t|
      t.string :name
      t.string :description
      t.float :price
      t.integer :stock

      t.timestamps null: false
    end
  end
end
