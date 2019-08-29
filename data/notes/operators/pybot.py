# PyBot implementation for CS106R
# By: Sabri Eyuboglu and Geoffrey Angus 

from termcolor import colored
import numpy as np
import time

def get_board(size=5):
  """ Produces the board for PyBot 
  Args:
    size (int) 
  """
  board = np.zeros((size, size))
  board[4, :] = 1
  board[:, 4] = 1
  board[0, 4] = 0
  return board
  

class PyBot:
  """ PyBot base class """
  
  DIRS = [(u'➡️', [0, 1]),  # Right
          (u'⬇️', [1, 0]),  # Down
          (u'⬅️', [0, -1]), # Left
          (u'⬆️', [-1, 0])] # Up
          
  def __init__(self, board, delay = 0.5):
    """ Initializes PyBot
    Args:
      board (np.array) 
      delay (float)
    """
    self.delay = delay
    
    self.size = board.shape[0]    
    self.board = board 
    
    self.direction = 0
    self.cursor, self.vec = self.DIRS[self.direction]
    self.position = np.array([4, 0])
    
    self.fruits = 0
    self.is_crashed = False
    self.last_action = None 
  
  
  def end(self):
    """ Ends a PyBot run 
    Args:
      self (PyBot) 
    """
    if(self.is_crashed):
      print("Try again! If you're stuck ask Geoff and Sabri for help on the Q&A forum!")
    elif(self.test()):
      print(colored("Success: ", "green", attrs = ['bold']) + colored("Your bot picked up all the fruit!", "green"))
    else:
      print(colored("Oranges Remain: ", "red", attrs = ['bold']) + colored("PyBot didn't pick up all the fruit!", "red"))
      print("Try again! If you're stuck ask Geoff and Sabri for help on the Q&A forum!")
  
  def test(self):
    """ Tests if the PyBot mission was completed 
    Args:
      self (PyBot) 
    """
    return np.array_equal(self.board, 
                          np.zeros((self.size, self.size)))
  
  def print_board(self):
    """ Ends a PyBot run 
    Args:
      self (PyBot) 
    """
    board_str = '\n'*6 # clears, in effect

    board_str += colored('PyBot', attrs=['bold']) + '\n'
    board_str += '------' + '\n'
    board_str += u'🍊' + 'Collected:' + str(self.fruits) + '\n'
    for row in range(self.size):
      row_str = '|'
      for col in range(self.size):
        if self.board[row, col] == 0:
          row_str += u'🌱' 
        elif self.board[row, col] == 1:
          row_str += u'🍊'
        
        if row == self.position[0] and col == self.position[1]:
          row_str += self.cursor
        else: 
          row_str += u'◾️'
        row_str += '\t|'
      
      board_str += row_str + '\n'
    
    if self.last_action != None:
      board_str +=  self.last_action

    print(board_str)
  
  def crash(self, message):
    """ Executes a PyBot crash
    Args:
      self (PyBot) 
      message (string)
    """
    print(colored("Crash: ", "red", attrs = ['bold']) + colored(message, "red"))
    self.is_crashed = True
    self.end()
    quit()
  
  def in_bounds(self, position):
    """ Whether or not PyBot is in bounds on the field
    Args:
      self (PyBot) 
    Return: 
      in_bounds (bool)
    """
    return (position[0] >= 0 and 
            position[0] < self.size and
            position[1] >= 0 and 
            position[1] < self.size)
    
  def move(self):
    """ Moves PyBot one step forward
    Args:
      self (PyBot) 
    """
    self.position += self.vec
    
    if not self.in_bounds(self.position): 
      self.crash('You moved off the edge of the world!')
    self.last_action =  "Action: " + colored("move()", "cyan") 
    
    self.update()
  
  def turn_right(self):
    """ Turns PyBot right
    Args:
      self (PyBot) 
    """
    self.direction = (self.direction + 1) % len(self.DIRS)
    self.cursor, self.vec = self.DIRS[self.direction]
    self.last_action =  "Action: " + colored("turn_right()", "cyan")
    self.update()
  
  def mark(self):
    """ Marks PyBot's current cell 
    Args:
      self (PyBot) 
    """
    self.board[tuple(self.position)] = 1
    self.last_action =  "Action: " + colored("plant_fruit()", "cyan") 
    self.update()
  
  def unmark(self):
    """ Unmarks PyBot's current cell
    Args:
      self (PyBot) 
    """
    if self.board[tuple(self.position)] != 1:
      self.crash("You tried to pick up a fruit where there was no fruit!")
    self.board[tuple(self.position)] = 0
    self.fruits += 1
    self.last_action = "Action: " + colored("pick_fruit()", "cyan")
    self.update()
  
  def front_is_blocked(self):
    """ Checks if front is blocked 
    Args:
      self (PyBot) 
    Return:
      front_is_blocked (bool)
    """
    return not self.in_bounds(self.position + self.vec)
  
  def is_marked(self):
    """ Checks if PyBot's current cell is marked
    Args:
      self (PyBot) 
    Return:
      is_marked (bool)
    """
    return self.board[tuple(self.position)] == 1
    
  # Directions 
  def is_facing_east(self):
    """ Checks if PyBot is facing east  
    Args:
      self (PyBot) 
    Return:
      is_facing_east (bool)
    """
    return self.direction == 0
  
  def is_facing_south(self):
    """ Checks if PyBot is facing south  
    Args:
      self (PyBot) 
    Return:
      is_facing_south (bool)
    """
    return self.direction == 1
  
  def is_facing_west(self):
    """ Checks if PyBot is facing west  
    Args:
      self (PyBot) 
    Return:
      is_facing_west (bool)
    """
    return self.direction == 2
    
  def is_facing_north(self):
    """ Checks if PyBot is facing north  
    Args:
      self (PyBot) 
    Return:
      is_facing_north (bool)
    """
    return self.direction == 3
    
  def update(self):
    """ Updates the display and pauses for animation
    Args:
      self (PyBot) 
    """
    self.print_board()
    time.sleep(self.delay)
    

# start up and tear down functions exported to main
def init(test = False):
  """ Start up function – displays start menu. If test is True
  it, doesn't present menu but uses default values.
  Args:
    self (PyBot) 
    test (bool) 
  """
  global k 
  print(colored('PyBot', attrs=['bold']))
  print('------')
  if test:
    delay = 0 
  else: 
    while True: 
      speed = input("How fast should PyBot move? \nEnter " + 
                    colored('slow', attrs=['underline']) + ', ' + 
                    colored('normal', attrs=['underline']) + ', or ' + 
                    colored('fast', attrs=['underline']) + ':')
      if speed == "" or speed == "slow":
        delay = 1.0
        break
      elif speed == "normal":
        delay = 0.5
        break
      elif speed == "fast":
        delay = 0.2
        break
      print("Unrecognized speed. Please enter slow, normal or fast.")
  
  board = get_board()
  k = PyBot(board, delay)
  k.print_board()
  if not test: input("Hit " + colored("ENTER", attrs=['bold']) + " to start:")
  
def end():
  """ Ends PyBot round
  Args:
    self (PyBot) 
  """
  global k 
  k.end()
  
def test():
  """ Runs test to see if PyBot mission was completed 
  Args:
    self (PyBot) 
  Return:
    test (bool)
  """
  global k
  return k.test()


# wrapper functions exported for PyBot controls 
def move():
  """ Moves PyBot one cell forward  
  Args:
    None 
  """
  k.move()

def turn_right():
  """ Turns PyBot right
  Args:
    None 
  """
  k.turn_right()

def front_is_blocked():
  """ Checks if front is blocked
  Args:
    None
  Return: 
    front_is_blocked (bool)
  """
  return k.front_is_blocked()

def has_fruit():
  """ Checks if current cell has fruit 
  Args:
    None
  Return: 
    has_fruit (bool)
  """
  return k.is_marked()

def pick_fruit():
  """ Turns PyBot right
  Args:
    None 
  """
  k.unmark()

def is_facing_east():
  """ Checks if PyBot is facing east 
  Args:
    None
  Return: 
    is_facing_east (bool)
  """
  return k.is_facing_east()

def is_facing_north():
  """ Checks if PyBot is facing east 
  Args:
    None
  Return: 
    is_facing_east (bool)
  """
  return k.is_facing_north()

def is_facing_west():
  """ Checks if PyBot is facing west 
  Args:
    None
  Return: 
    is_facing_west (bool)
  """
  return k.is_facing_west()

def is_facing_south():
  """ Checks if PyBot is facing south 
  Args:
    None
  Return: 
    is_facing_south (bool)
  """
  return k.is_facing_south()