from backend.check import numbers
import pytest

def test_numbers():
    assert numbers(5, 5) == 10