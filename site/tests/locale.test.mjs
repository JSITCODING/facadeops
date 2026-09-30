import assert from "node:assert/strict";
import test from "node:test";

import { resolveLocale } from "../src/locale.js";

test("uses a saved supported locale before browser preferences", () => {
  assert.equal(resolveLocale({ savedLocale: "pt", languages: ["en-US"] }), "pt");
});

test("resolves regional Portuguese browser locales", () => {
  assert.equal(resolveLocale({ languages: ["pt-AO", "en-US"] }), "pt");
});

test("ignores unsupported saved values and uses a supported browser locale", () => {
  assert.equal(resolveLocale({ savedLocale: "fr", languages: ["pt-PT"] }), "pt");
});

test("falls back to English when no supported locale is available", () => {
  assert.equal(resolveLocale({ languages: ["fr-FR"] }), "en");
});
