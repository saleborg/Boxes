package stefan;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.ObjectMapper;

@Path("/boxes")
public class BoxService {

	private BoxDAO boxDAO;

	public BoxService() {
		this.boxDAO = new BoxDAO();
	}

	public BoxService(BoxDAO boxDAO) {
		this.boxDAO = boxDAO;
	}

	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public Response getBoxes_JSON() {
		List<Box> boxes = boxDAO.getAllBoxes();

		String json = convertToJson(boxes);
		return Response.ok().entity(json).header("Access-Control-Allow-Origin", "*").build();
	}

	private String convertToJson(Object boxes) {
		ObjectMapper mapper = new ObjectMapper();
		String json = "";
		try {
			json = mapper.writeValueAsString(boxes);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return json;
	}

	@POST
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public Response addBox(Box box) {
		Box newBox = boxDAO.addBox(box);
		return Response.ok().entity(convertToJson(newBox)).build();

	}

}
