import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import javax.ws.rs.core.Response;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import stefan.*;

@RunWith(MockitoJUnitRunner.class)
public class ApiTest {
	
	@InjectMocks
	BoxService boxService;

	@Mock
	BoxDAO boxDAO;
	
	@Mock
	Box box;
	
	@Test
	public void addBox() {
		//Act
		Response r = boxService.addBox(box);
		//Assert
		assertEquals(200, r.getStatus());
		verify(boxDAO,times(1)).addBox(box);
	}

	@Test
	public void listBoxesTest() {
		//Act
		Response r = boxService.getBoxes_JSON();
		//Assert
		assertEquals(200, r.getStatus());
		verify(boxDAO,times(1)).getAllBoxes();
	}

}