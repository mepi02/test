import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts";

Deno.test('1 + 1 は 2 である', () => {
	// 1 + 1 は 2 であることを確かめる
	assertEquals(1 + 1, 3);
});
