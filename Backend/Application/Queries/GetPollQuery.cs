﻿using Application.DTO;
using Application.Repositories;
using MediatR;

namespace Application.Queries
{
    public class GetPollQuery : IRequest<GetPollDTO>
    {
        public Guid _pollId { get; set; }
        public GetPollQuery(Guid id)
        {
            _pollId = id;
        }
    }
    public class GetPollQueryHandler : IRequestHandler<GetPollQuery, GetPollDTO>
    {
        private readonly IPollRepository _pollRepository;
        public GetPollQueryHandler(IPollRepository pollRepository)
        {
            _pollRepository = pollRepository;
        }

        public async Task<GetPollDTO> Handle(GetPollQuery request, CancellationToken token)
        {
            return await _pollRepository.GetPollById(request._pollId);
        }
    }
}