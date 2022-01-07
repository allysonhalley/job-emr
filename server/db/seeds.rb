##Seed Occupations
5.times do |i|
    Occupation.create!(
        description: Faker::Company.profession,
        activity: Faker::Hobby.activity
    )
end
puts "Created 5 Occupations!"

## Employees
5.times do |i|
    Employee.create!(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        occupation: Occupation.find(Occupation.ids.sample),
        birth_date: Faker::Date.birthday(min_age: 18, max_age: 90),
        admission_date: Faker::Date.between(from: 10.year.ago, to: Date.today),
        salary: Faker::Number.between(from: 1000.00, to:10000.00)
    )
end
puts "Created 5 Employee!"