class CreateOccupations < ActiveRecord::Migration[6.0]
  def change
    create_table :occupations do |t|
      t.text :description, null: false
      t.string :activity, null: false

      t.timestamps
    end
  end
end
