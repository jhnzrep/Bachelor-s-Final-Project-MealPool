using MealPoolLibrary.Services.DBConfiguration;
using MealPoolLibrary.Services.Repositories;
using MealPoolLibrary.Services.Interfaces;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.AllowAnyOrigin();
                          policy.AllowAnyHeader();
                          policy.AllowAnyMethod();
                      });
});

// Add services to the container.
builder.Services.AddSingleton<IDbClient, DbClient>();
builder.Services.Configure<MealPoolDBConfig>(builder.Configuration);
builder.Services.AddTransient<IUserRepository, UserRepository>();
builder.Services.AddTransient<IMealRepository, MealRepository>();
builder.Services.AddTransient<IReviewRepository, ReviewRepository>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
//}

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
