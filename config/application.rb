require_relative "boot"
require "vite_rails"
require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Portfolio
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    config.vite = ActiveSupport::OrderedOptions.new
    config.vite.log_level = :info # Set to :debug for more detailed logs
    config.vite.manifest_mode = Rails.env.production? ? "json" : "inline"
    config.vite.public_output_dir = "public"
    config.vite.cache_dir = "tmp/cache/vite"
    config.vite.server = {
      # Vite development server host/port
      host: "localhost",
      port: 3000,

      # "Hot Module Replacement"
      hmr: true,

      # Base URL to avoid asset issues
      public_dir: "public",
      base: "/"
    }
  end
end
