terraform {
  required_providers {
    heroku = {
      source  = "heroku/heroku"
      version = "4.8.0"
    }
  }
}

provider "heroku" {
}

resource "heroku_app" "default" {
  name   = "simple-react-app-123456"
  region = "us"

  config_vars = {
    REACT_APP_URL     = "https://api.nasa.gov/planetary/apod"
    REACT_APP_API_KEY = "DEMO_KEY"
  }

  buildpacks = [
    "https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz"
  ]
}
