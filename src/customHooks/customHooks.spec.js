import { useCartCount } from "./useCartCount";
import { renderHook } from "@testing-library/react-hooks";
import { useItem } from "./useItem";
import { ItemsService } from "../dataLayer/services/items"
import { ItemsRepo } from "../dataLayer/repositories/inmemory/items"
import { Store } from "./../providers/store"
import { CartCount } from "../providers/context"

describe('CUSTOME HOOKS TESTS', () => {

  describe('use Cart Count hook', () => {
    test('get cart count', () => {
      const { result } = renderHook(() => useCartCount());
      expect(result.current.cartCount).toStrictEqual(undefined);
    })
  })

  describe('use Item hook', () => {
    const itemsService = new ItemsService(new ItemsRepo(new Store()));
    test('get cart count', () => {
      const { result } = renderHook(() => useItem(itemsService, CartCount));
      expect(result.current.loading).toStrictEqual(false);
    });
  })
})