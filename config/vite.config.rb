module Vite
  module Config
    def self.configure(server)
      # Set the entry point of the application
      config.entry = "/app/javascript/entrypoints/application.ts"

      # Set the output directory
      config.out_dir = "dist"

      # Enable the Ruby plugin
      config.plugin_ruby.enabled = true
    end
  end
end
