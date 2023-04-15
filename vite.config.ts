// This file is the entry point for configuring Vite 
// and its plugins using TypeScript
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [RubyPlugin()],
  server: {
    // Configure the Ruby plugin in the Vite dev server
    configureServer(server) {
      // Require your Ruby configuration file
      const config = require('./path/to/your/ruby/config.rb');
      // Use the `set` method of the Vite dev server to set the `ruby` option of the Ruby plugin
      server.set('ruby', config);
    },
  },
} as any); // type casting to bypass the type error :/
