# Rook integrations

Ship browser-native typed provider clients for Rook. Each integration owns its
authoritative API inputs, generated TypeScript surface, model skill, and a real
browser boundary test. Rook retains authentication, sandbox lifecycle, and the
workspace implementation.

Prefer official clients or authoritative API descriptions. Do not add an
integration registry, plugin lifecycle, provider-neutral transport, MCP
wrapper, compatibility alias, or private auth/network owner.

Run `vp run check` before committing.
